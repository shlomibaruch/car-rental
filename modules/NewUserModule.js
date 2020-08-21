const mongoos = require('mongoose');
const userSchema = new mongoos.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

const NewUser = mongoos.model("users", userSchema);

module.exports = {
    NewUser,
};
