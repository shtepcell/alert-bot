const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const { sendMessage } = require('./lib/telegram');

const app = express();
const port = 2020;

app.use(bodyParser.json());

app.post('/alert', async (req, res) => {
    const { project, message, url } = req.body;

    await sendMessage(`*[SENTRY] Ошибка в ${project}:*\n\n${message}\n\n[Link](${url})`);
    return res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
});
