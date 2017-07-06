#encore-require-assets-helper

Creates .js file which requires all suitable files in folder. This file can be then required in another javascripts. 

##Usage
In your `webpack.config.js`
```
var requireAssetsHelper = require("encore-require-assets-helper");
requireAssetsHelper(from,to,strip,add);
```

And in your javascript file, which you are using as Entry in webpack-encore:

```
const assets = require(./assets.js) //requires generated file
```

##Configuration

The function has 4 parameters:

* `from` A path to directory which includes files which you want to require
* `to` A path to directory where you want to store your generated file
* `strip` Optional, removes unwated strings from the path of required files
* `add` A path prefix for all required files

##Example

`webpack.config.js`

```
var Encore = require('@symfony/webpack-encore');
var requireAssetsHelper = require("encore-require-assets-helper");

requireAssetsHelper(
    "./web/assets/img/**/*.{jpg,jpeg,png,gif,svg,ico}",
    "./web/assets/js/assets.js",
    "./web/assets/",
    "../"
);

Encore
    ...
    .addEntry('app', './web/assets/js/main.js')
    .addStyleEntry('main', './web/assets/styles/main.sass')
    .enableVersioning()
    ...
;

module.exports = Encore.getWebpackConfig();

```

`main.js`

```
...    
const assets = require("./assets.js");
...
```


