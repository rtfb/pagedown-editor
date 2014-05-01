var pagedown = require("pagedown");
global.window.Markdown = pagedown;

var editor = require("./Markdown.Editor");

exports.getPagedownEditor = function() {
    return new Markdown.Editor(pagedown.getSanitizingConverter());
}
