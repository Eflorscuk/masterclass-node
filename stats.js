const os = require('os');
const log = require('./logger');
// aplicação para mostrar memória livre, memória total e porcentagem de uso das memórias

setInterval(() => {
    const { freemem, totalmem } = os;
    
    //console.log(`${parseInt(freemem() / 1024 / 1024)} MB`, totalmem() / 1024 / 1024);
    
    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);
    
    //console.log(`=> ${mem}, => ${total}, => ${percents}`);
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
    }
    
    console.clear();
    console.log("=== PC STATS ===");
    console.table(stats);

    log(`${JSON.stringify(stats)}\n`);
}, 1000);


