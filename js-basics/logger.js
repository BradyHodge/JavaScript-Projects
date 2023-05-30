var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// alows us to export the function log
module.exports = log;

// Export as an object:
// module.exports.log = log;