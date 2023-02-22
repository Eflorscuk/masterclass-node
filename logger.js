// criação de um app para guardar logs do sistema
const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emiter = new EventEmitter();

emiter.on('log', (message) => {
    //console.log(message);
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err;
    });
})


function log(message) {
    emiter.emit('log', message);
}

module.exports = log;