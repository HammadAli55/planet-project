const http = require('http');
const PORT = 3100;
const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.writeHead(200, {
        //     'Content-type':'application/json'
        // });
        res.end(JSON.stringify({
            id:1, name: 'shah'
        }))
    } else if(req.url === '/message'){
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Helli Isaava!</li>')
        res.write('<li>Helli Isaav!</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) ; 