var domain = require('domain').create();
domain.on('error', function(err){
    console.log(err);
});

module.exports.domain = domain;
