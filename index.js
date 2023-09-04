const http = require('http');
const PORT = 3100;
const server = http.createServer();

const friends = [
    {
        id: 1,
        name: 'Hammad'
    },
    {
        id: 2,
        name: 'Ali'
    },
    {
        id: 3,
        name: 'Shah'
    }
]

server.on('request', (req, res) => {
    // const items = req.url.split('/')
    if(req.url === '/friends') {
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.writeHead(200, {
        //     'Content-type':'application/json'
        // });
        res.end(JSON.stringify({
            friends
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