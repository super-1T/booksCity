const fs = require('fs');
const os = require('os');

module.exports = (req, res, next) => {
    const data = new Date();
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();

    const {method, url} = req;
    const userAgent = req.get('user-agent');

    const log = `${hour}:${minutes}:${seconds} ${method}: ${url} user-agent: ${userAgent}`;
    console.log(data);

    fs.appendFile('server.log', log + os.EOL, (err) => {
        if(err) throw err;
    } )
    next()
}