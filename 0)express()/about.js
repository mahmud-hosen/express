const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        const requestProperties = {
            path: req.url,
            method: req.method
        }

        res.write('This is about page');
        console.log(requestProperties)
        res.end();

    } else if (req.url === '/process') {
        res.write('This is about page .');
        res.end();
    } else {
        res.write('Not found.');
    }
});

server.listen(3000);
console.log('Listening on port 3000');