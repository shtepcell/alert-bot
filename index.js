const express = require('express');
require('dotenv').config();

const { sendMessage } = require('./lib/telegram');

const app = express();
const port = 2020;

app.post('/alert/:service', async (req, res) => {
    const { service } = req.params;

    console.log(req.body);

    await sendMessage(`Ошибка в проекте ${service}`);
    return res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
});
