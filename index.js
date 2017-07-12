var fs = require('fs');
var glob = require("glob");
var path = require("path");

module.exports = function(from,to,strip,add) {
    if (!add) {
        add = "";
    }
    if (!strip) {
        strip = "";
    }
    var stream = fs.createWriteStream(to);
    glob.sync(from).forEach( function( file ) {
        var hashed = Math.random().toString(36).substring(7);
        file = file.replace(strip,"");
        stream.write('const asset_a'+ hashed + ' = require("'+ add + file+'");\n');
    });
    stream.end();
};