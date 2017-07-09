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
        var helper = file.replace(/\.[^/.]+$/, "");
        var helper2 = helper.replace(/-/g,"");
        var name = helper2.match("[^/]+$");
        file = file.replace(strip,"");
        stream.write('const asset-'+ name + ' = require("'+ add + file+'");\n');
    });
    stream.end();
};