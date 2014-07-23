# ftl

Another template library

Too simple usage ([more realistic use cases](#usages-and-explanations)) :
```javascript
form({ action: "https://github.com/ybr/ftl"},
  fieldset(
    label({ "for": "myinput" }, "My input"),
    input({ "type": "text", id: "myinput", name: "myinput" })
  ),
  div({ "class": "actions"},
    button("OK")
  )
)
```

It builds the following DOM :
```
<form action="https://github.com/ybr/ftl">
  <fieldset>
    <label for="myinput">My input</label>
    <input type="text" id="myinput" name="myinput">
  </fieldset>
  <div class="actions">
    <button>OK</button>
  </div>
</form>
```

**ftl** is logic-full, just plain JS (i18n, text formatting, ...)

**ftl** does the bare minimum to make your DOM manipulation more readable

**ftl** allows you to write a template as a function, it pays you:

  * composability of templates, both include and layout

  * extensibility of the templating logic seamlessly

**ftl** has a very light footprint (< 500 bytes)

**ftl** performs fast, see [benchmarks](#benchmarks)

---

## Supported browser

All browsers supported

Current master state is [![Test Status](https://saucelabs.com/buildstatus/ftljs)](https://saucelabs.com/u/ftljs)

---

## Installation

From [GitHub](https://github.com/ybr/ftl)

```json
dependencies: {
  "ftl": "https://github.com/ybr/ftl#master"
}
```

---

## Usages and explanations

[Simple](examples/simple.md)

[Include](examples/include.md)

[Layout](examples/layout.md)

[Internationalization](examples/i18n.md)

[Helpers](examples/helpers.md)

[Custom](examples.custom.md)

---

## Benchmarks

TODO
