// imports
const chalk = require('chalk');

// Logger files are used to highlight certain things and
// prettify our logs.
module.exports = {
    // constants to be used to color code log results
    chalk: chalk,
    info: chalk.italic.blue,
    error: chalk.bold.red,
    warn: chalk.keyword('orange'),
    time: chalk.underline.bgCyan.black,
    highlight: chalk.italic.yellow,
    
    // timestamp function
    getTime: function() {
        return "[" + this.time(new Date().toISOString()) + "]: ";
    },
}