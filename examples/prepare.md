# ftl

Before dealing with the interesting part we should prepare some necessary boilerplate.

It has been a very easy decision to not provide preset tags and let you declare tags of your own.
* I hope this will help demystify anything one might think is mystic
* It happens we are almost always using the same subset of tags from HTML5 so we do not need them all
* If you count the number of characters it is twice the size of ftl.js just for strings


```javascript
// Defines HTML5 elements
(function() {
  function element(tag) { window[tag] = ftl(tag) }
  function simpleElement(tag) { window[tag] = ftl(tag)() }
  ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"].forEach(element);
  ["br", "hr"].forEach(simpleElement);
})();

// A document fragment allows to return one transparent element embedding many elements (Further reading http://davidwalsh.name/documentfragment)
var fragment = ftl();
```

I known this is very dangerous to pollute the global namespace with so many functions but this is for the sake of simplicity. You can very easily use a proper namespace, say [html5](../test/ftl-html5.js), h5, ftl, ... anything you like.

---

The following declare a namespace for HTML views (optional in your application):

```javascript
var views = { html: {} }
```

[Simple](simple.md)
