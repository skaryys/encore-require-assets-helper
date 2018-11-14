> Package is deprecated, work can be done without him thanks to [@symfony/webpack-encore](https://github.com/symfony/webpack-encore) 0.21+.


# encore-require-assets-helper

Creates .js file, which you can require in your js entry which you use in your [@symfony/webpack-encore](https://github.com/symfony/webpack-encore) config.

## Usage
Create file `assets.config.js`
```
var requireAssetsHelper = require("encore-require-assets-helper");
requireAssetsHelper(from,to,strip,add);
```

And in your javascript file, which you are using as Entry in webpack-encore:

```
//requires generated file
const assets = require("./assets.js");
```

Then run:

```
node assets.config.js
```

You should run this every time you add some images to your project.

> In older versions of this package, It was recommended to write the requireAssetsHelper function inside the webpack.config.js. You can do it even now, but if you  run encore with watch, it can be really slow, depending on amount and size of your images. The problem is mentioned [here](https://github.com/skaryys/encore-require-assets-helper/issues/1).

## Configuration

The function has 4 parameters:

* `from` A path to directory which includes files which you want to require
* `to` A path to directory where you want to store your generated file
* `strip` Optional, removes unwated strings from the path of required files
* `add` A path prefix for all required files

## Example

`assets.config.js`

```
var requireAssetsHelper = require("encore-require-assets-helper");

requireAssetsHelper(
    "./assets/images/**/*.{jpg,jpeg,png,gif,svg,ico}",
    "./assets/js/assets.js",
    "",
    "../../"
);
```

`webpack.config.js`

```
Encore
    ...
    .addEntry('app', './web/assets/js/main.js')
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


