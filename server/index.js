/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const fs = require("fs");
const bodyParser = require('body-parser');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const jsonPath = `${__dirname}\\data\\tasks.json`;
app.get('/api/tasks/list', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    res.end(data);
  });
});
app.get('/api/tasks/toggle/:id', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    // eslint-disable-next-line no-debugger
    data = JSON.parse(data);

    const data1 = data.map(todo =>
      (todo.id === req.params.id)
        ? { ...todo, completed: true }
        : todo)
    const newData = [...data1];
    // eslint-disable-next-line no-debugger
    debugger;
    // newData.add(task);
    const jsonData = JSON.stringify(newData);

    fs.writeFile(jsonPath, jsonData, (writeFileErr) => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(JSON.stringify(data));
      }
    })
  });
});

app.post('/api/tasks/add', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    // eslint-disable-next-line no-debugger
    data = JSON.parse(data);
    const task1 = req.body;
    // task1.id = data.length + 1;
    const newData = [...data, task1];
    // eslint-disable-next-line no-debugger
    // debugger;
    // newData.add(task);
    const jsonData = JSON.stringify(newData);
    // eslint-disable-next-line no-debugger
    debugger;
    fs.writeFile(jsonPath, jsonData, (writeFileErr) => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(JSON.stringify(data));
      }
    })
  });
});

// app.get('/api/contacts/:id', (req, res) => {
//   fs.readFile(jsonPath, 'utf8', (err, data) => {
//     const contacts = JSON.parse(data);
//     const contact = contacts.find(contactObj => contactObj._id === req.params.id) || {};
//     res.end(JSON.stringify(contact));
//   });
// });

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
