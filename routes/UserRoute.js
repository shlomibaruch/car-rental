const router = require('express').Router();
const NewUser = require('../modules/NewUserModule');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../Auth')
router.post('/register', async (req, res) => {
    const {email,password} = req.body;
    // console.log(email,password);
    try {

        const { email, password } = req.body;

        // Checks that all fields are not empty 

        if (!email || !password )
            return res.status(400).json({ msg: " Check that all fields are full " });

        // Checks the password length. If it is less than 5 returns an error message

        if (password.length < 5)
            return res.status(400).json({ msg: 'You need enter more then 5 charecter' });

        // Checking matching passwords at registration

        // Here I am checking to see if the user exists with this email.If so, I return a message that the user exists

        const existingUser = await NewUser.NewUser.findOne({ email: email });
        if (existingUser)
            return res.status(400).json({ msg: 'email exists' });

        // Hash the password -->

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // create a new user before insert -- > 

        const newUser = new NewUser.NewUser({
            email,
            password: passwordHash,
        });

        const saveUser = await newUser.save();

        res.json(saveUser);

    } catch (err) {
        res.status(500).json(err)
    }

}
);
router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;

        // // Checks that all fields are not empty 

        if (!email || !password)
            return res.status(400).json({ msg: 'You need to enter all the fields' });

        // // Here I am checking to see if the user exists with this email.If so, I return a message that No account with this email

        const user = await NewUser.NewUser.findOne({ email: email });

        if (!user)
            return res
                .status(400)
                .json({ msg: 'No account with this email ' });

        // // if the user exist 
        const isTheSamePass = await bcrypt.compare(password, user.password);

        if (!isTheSamePass)
            return res.status(400).json({ msg: ' is mot the same password ' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
            }
        });
    } catch (err) {
        res
            .status(500)
            .json({ error: err.message })
    }


});
router.post("/tokenIsValid", async (req, res) => {
    try {

        const token = req.header("x-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);

        const user = await NewUser.NewUser.findById(verified.id);
        if (!user) return res.json(false);

        res.json(true)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const user = await NewUser.NewUser.findById(req.user);
        res.json({
            email: user.email,
            id: user._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });

    }
});
module.exports = router;