const router = require('express').Router();
const passport = require('passport');
const facebookTokenStartegy = require('passport-facebook-token');
const route = require('./UserRoute');
const User = require('../modules/NewUserModule');
const cors = require('cors')
router.use(cors())
router.use(passport.initialize())
passport.serializeUser((user, cb) => {
    cb(null, user)
});
passport.deserializeUser((user, cb) => {
    cb(null, user)
});
const user = {}
passport.use('facebook', new facebookTokenStartegy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_AUTH

}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('profile', profile);
        console.log('refreshToken', refreshToken);
        console.log('accessToken', accessToken);
        user.profile = profile.displayName
        return done(null, profile)

    } catch (err) {
        done(err, false, err.message)
    }
}));
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/cars',
        failureRedirect: '/'
    }),
    (req,res)=> {
        res.redirect('/')
    });

console.log('user',user);
module.exports = router;