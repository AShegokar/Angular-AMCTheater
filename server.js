const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const request = require('request');


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/moviesnowplaying', function(req, res){
  request.get({url:'https://api.amctheatres.com/v2/movies/views/now-playing',headers:{'X-AMC-Vendor-Key':'BA1BBF60-0E67-463A-B479-9A7EF9B7DC25'}},function(error,resp,body){
  res.send(body);
  });
});

app.get('/comming-soon', function(req, res){
  request.get({url:'https://api.amctheatres.com/v2/movies/views/coming-soon',headers:{'X-AMC-Vendor-Key':'BA1BBF60-0E67-463A-B479-9A7EF9B7DC25'}},function(error,resp,body){
  res.send(body);
  });
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
