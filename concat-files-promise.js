var fs = require('fs'),
join=require('path').join;
module.exports = function(fileArray, basePath) {

    var concatenated = '',
        filePromises = [];

    return new Promise(function(resolve, reject) {
        if (!fileArray.length) {
            reject('No files specified');
        } else {
            fileArray.map(function(filename) {
                filePromises.push(
                    new Promise(function(resolve, reject) {
                        fs.readFile(join( basePath, filename), function(err, content) {
                            if (err) reject(err);
                            resolve(content);
                        });
                    })
                );
            });
            // only resolve if all files read
            Promise.all(filePromises).then(function() {
                for (var i = 0; i < arguments.length; i++) {
                    concatenated += arguments[i].toString();
                }
                resolve(concatenated);
            }).catch(function(err) {
                reject(err);
            });
        }
    });
};