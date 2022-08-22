const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { PORT = 3000 } = process.env;

app.use(morgan('tiny'));
app.use(cors({ optionsSuccessStatus: 200 }));

app.use('/api/whoami', (req, res) => {
  res.status(200).json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

app.listen(PORT);

module.exports = app;
