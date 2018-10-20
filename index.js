const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));

console.log('Booting server');
app.listen(PORT, onListen).on('error', onError);

function onListen() {
    console.log(`Server running on ${PORT}`);
}

function onError(err) {
    console.error('Failed to start application');
    console.error(err);
}