var sessionUtils = require('../utils/sessionUtils');

module.exports = {
    showHomePage: function* (next) {
        yield this.render('home',{

        });
    },
showBotPage: function* (next) {
        yield this.render('bot',{

        });
    },
    logout: function* (next) {
        var sessionId = this.cookies.get("SESSION_ID");
        if(sessionId) {
            sessionUtils.deleteSession(sessionId);
        }
        this.cookies.set("SESSION_ID", '', {expires: new Date(1), path: '/'});

        this.redirect('/');
    }
}
