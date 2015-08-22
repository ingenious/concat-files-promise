

#concat-files-promise

<blockquote>Promise based file concatenator</blockquote>


## Installation

```
		$ npm install ingenious/concat-files-promise

```
```

		var concatFiles=require('concat-files-promise');
```

## Usage

```

		concatFiles([filepath1, filepath2, ...])
			.then(function(concatenated){
                           
            //  .. do something with the concatenated files


            }),catch(err){

            	console.log('Can\'t read '+err.path);

            };


```

