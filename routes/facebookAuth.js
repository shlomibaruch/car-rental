const router = require('express').Router();
const passport = require('passport');
const facebookTokenStartegy = require('passport-facebook-token');
// const User = require('../modules/NewUserModule');

router.use(passport.initialize())
passport.serializeUser((user, cb) => {
    cb(null, user)
});
passport.deserializeUser((user, cb) => {
    cb(null, user)
});
const user = {}
const cors = require('cors')
router.use(cors())
passport.use('facebook', new facebookTokenStartegy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_AUTH

}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('profile', profile);
        console.log('refreshToken', refreshToken);
        console.log('accessToken', accessToken);

        return done(null, profile)


    } catch (err) {
        done(err, false, err.message)
    }
}));
router.post('/auth/facebook', passport.authenticate('facebook', { scope: ['email'], session: false }));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/cars',
        failureRedirect: '/login'
    }));

module.exports = router;