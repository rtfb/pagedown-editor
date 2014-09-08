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

In some file, say, [sample.js](sample.js), create an entry point to the editor:

``` js
var editor = require("pagedown-editor");

function getPagedownEditor() {
    return editor.getPagedownEditor();
}

global.window.getPagedownEditor = getPagedownEditor;
```

Then, during build time, browserify that file and copy the buttons and the
stylesheet:

``` sh
$ browserify sample.js -o bundle.js
$ cp node_modules/pagedown-editor/wmd-buttons.png static/
$ cp node_modules/pagedown-editor/pagedown.css static/
```

Finally, use the bundle like this in your html:

``` html
<!-- among headers, instead of Markdown.*.js, include your bundle: -->
<link rel="stylesheet" href="/static/pagedown.css">
<script type="text/javascript" src="/static/bundle.js"></script>

<!-- ...
    Then at the end of body, invoke the editor with this one-liner: -->
<script type="text/javascript">
(function () {
     getPagedownEditor().run();
     })();
</script>
```

For your convenience there's a [sample.html](sample.html) with all of the above
in one place. After installation it will work out of the box from within your
`node_modules` directory, just direct your browser to `file:///<path
to>/node_modules/pagedown-editor/sample.html`.

## License

MIT license, see [LICENSE.txt](LICENSE.txt).
