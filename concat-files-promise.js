var fs=require('fs');
module.exports = function(fileArray) {

        var concatenated = '',
            filePromises = [];

        return new Promise(function(resolve, reject) {
            _.each(fileArray, function(filename) {
                filePromises.push(
                    new Promise(function(resolve, reject) {
                        fs.readFile(filename, function(err, content) {
                            if (err) reject(err);
                            resolve(content);
                        });
                    })
                );
            });
            Promise.all(fileArray).then(function() {
                _.each(arguments, function(value) {
                    concatenated += value;
                });
                resolve(concatenated);
            }).catch(function(err){
                reject(err);
            });
        });
    };