const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));


    //just a test root route
    app.get('/',(req,res)=>{
        res.send('Hello Tom');
    })

};