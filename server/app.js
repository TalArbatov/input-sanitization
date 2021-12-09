const http = require('http')
const url = require('url');
const knexfile = require('./knexfile');
const Knex = require('knex');

const knex = Knex(knexfile);

http.createServer(async function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html'
    }
    var queryParams = url.parse(req.url, true).query;
    
    res.writeHead(200, headers)
        
    const query = `SELECT * FROM cars2 WHERE name = "${queryParams.name}"`;
    console.log(queryParams.name);
    console.log(query)
    const data = await knex.raw(query);
    res.end(JSON.stringify(data[0])); // end the response

}).listen(1235); //the server object listens on port 8080
  