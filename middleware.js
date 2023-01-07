module.exports = (req, resp, next) => {
    if (!req.query.age) {
        resp.send(`<h1>Before go to contact page provide your age</h1>`)
    }
    else if (req.query.age < 18) {
        resp.send('<h1>You are under aged</h1>')
    }
    else {
        next();
    }
}