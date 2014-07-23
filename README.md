ftl
====

A simple template library.

Simple usage :
```javascript
form({ action: "https://github.com/ybr/fundomplate"},
  fieldset(
    label({ "for": "myinput" }, "My input"),
    input({ "type": "text", id: "myinput" })
  ),
  div({ "class": "actions"},
    button("OK")
  )
)
```

**fundomplate** is logic-full

**fundomplate** does the strict minimum to make your DOM manipulation more readable

**fundomplate** allows you to write a template as a function and so compose it with other templates

**fundomplate** allows you to extend the templating logic seamlessly with functions

**fundomplate** has a very light footprint (< 500 bytes)

**fundomplate** performs fast (BENCHMARKS  TODO)

Supported browser
---

All browsers supported

Current master state is [![Test Status](https://saucelabs.com/buildstatus/fundomplate)](https://saucelabs.com/u/fundomplate)

Installation
---

From [NPM](https://npmjs.org/package/fundomplate)

```npm install fundomplate --save```

or directly in your package.json

```json
dependencies: {
  "fundomplate": "^0.1.0"
}
```

or from [GitHub](https://github.com/ybr/fundomplate)

```json
dependencies: {
  "fundomplate": "https://github.com/ybr/fundomplate#master"
}
```

Usages and explanations
---

Simple usage: test

Include usage: test

Layout usage: test

Multi-interesting usage (i18n, date formatting):

Helpers usage (with errors):

Custom usage:
table("Nom", "Adresse", users)
if(admin)

Multi-level layout usage: test


