var config = require('../config.json');

function responseCase(condition, respCode, respMsg) {
    return {
        'condition': condition,
        'respCode': respCode,
        'respMsg': respMsg
    };
}

function verificate(req, res) {
    var cases = [
        responseCase(()=> {
                return !req.body || !req.body.password;
                }, 400, 'password should be specified'),
        responseCase(()=> {
                return req.body.password != config.password;
                }, 401, 'wrong password'),
        responseCase(()=> {
                return req.body.password == config.password;
                }, 200, 'succeeded')
    ];
    console.log(req.body); 
    for (var i in cases) {
        var c = cases[i];
        if (c.condition()) {
            res.status(c.respCode).send(c.respMsg);
            return;
        }
    }
    
}
exports.verificate = verificate;
