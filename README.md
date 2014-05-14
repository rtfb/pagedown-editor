# Node package for PageDown Editor

The original [PageDown](http://code.google.com/p/pagedown/) repo only packages
server-side code in its [Node module](https://www.npmjs.org/package/pagedown).
This package also packages the editor, intended to be used along with
[Browserify](http://browserify.org/).

## Installation

``` sh
$ npm install -g browserify
$ npm install pagedown-editor
```

## Usage

In some file, say, `foo.js`, create an entry point to the editor:

``` js
var editor = require("pagedown-editor");

function getPagedownEditor() {
    return editor.getPagedownEditor();
}

global.window.getPagedownEditor = getPagedownEditor;
```

Then, during build time, browserify that file and copy the buttons:

``` sh
$ browserify foo.js -o bundle.js
$ cp node_modules/pagedown-editor/wmd-buttons.png static/
```

Finally, use the bundle like this in your html:

``` html
<!-- among headers, instead of Markdown.*.js, include your bundle: -->
<script type="text/javascript" src="bundle.js"></script>

<!-- ...
    Then at the end of body, invoke the editor with this one-liner: -->
<script type="text/javascript">
(function () {
     getPagedownEditor().run();
     })();
</script>
```

## License

MIT license, see [LICENSE.txt](LICENSE.txt).
