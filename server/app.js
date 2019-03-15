var express = require('express');
var bodyParser = require('body-parser');

var verificate = require('./routes/verificate').verificate;

var app = express();


app.use(bodyParser());

app.post('/gallery/secure', verificate);
app.get('/test', (req, res) => {res.send("godby");});

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
