# ftl.js

Another JS template library, which pretends to be simple thanks to functions.

Too simple usage ([more realistic use cases](#usages-and-explanations)) :
```javascript
form({ action: "https://github.com/ybr/ftl.js"},
  fieldset(
    label({ "for": "myinput" }, "My input"),
    input({ "type": "text", id: "myinput", name: "myinput" })
  ),
  div({ "class": "actions"},
    button("OK")
  )
)
```

It creates the following DOM :
```
<form action="https://github.com/ybr/ftl.js">
  <fieldset>
    <label for="myinput">My input</label>
    <input type="text" id="myinput" name="myinput">
  </fieldset>
  <div class="actions">
    <button>OK</button>
  </div>
</form>
```

**ftl.js** is logic full, just plain JS (i18n, text formatting, ...)

**ftl.js** does the bare minimum to ease DOM manipulation and readability

**ftl.js** allows you to write a template as a function, it pays you:

  * composability of templates, both include and layout

  * extensibility of the templating logic seamlessly

**ftl.js** has a very light footprint (< 500 bytes)

**ftl.js** performs fast, see [benchmarks](#benchmarks)

---

## Supported browser

All browsers supported

Current master state is [![Test Status](https://saucelabs.com/buildstatus/ftljs)](https://saucelabs.com/u/ftljs)

---

## Installation

Add a dependency in your package.json to [GitHub](https://github.com/ybr/ftl.js)

```json
dependencies: {
  "ftl": "https://github.com/ybr/ftl.js#master"
}
```

---

## Usages and explanations

[Prepare](examples/prepare.md)

[Simple](examples/simple.md)

[Include](examples/include.md)

[Layout](examples/layout.md)

[Internationalization](examples/i18n.md)

[Helpers](examples/helpers.md)

[Custom](examples.custom.md)

[Asynchronous](examples/async.md)

---

## Benchmarks

TODO
