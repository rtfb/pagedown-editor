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

``` js
// foo.js
var editor = require("pagedown-editor");

function getPagedownEditor() {
    return editor.getPagedownEditor();
}

global.window.getPagedownEditor = getPagedownEditor;
```

``` sh
$ browserify foo.js -o bundle.js
$ cp node_modules/pagedown-editor/wmd-buttons.png static/
```

``` html
<!-- your html -->
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
