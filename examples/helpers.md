# ftl.js

We can create helpers to help us handle form fields:
* helpers.inputText
* helpers.inputPassword
* and so on...

These helpers can manage prefilling, placeholders and last but not least errors.

```javascript
var helpers = {}

helpers.input = function(field, fieldTmpl) {
  return dl({ id: field.name + "_field", class: field.hasErrors()?"error":"" },
    dt(label({ for : field.name }, Messages(field.name))),
    dd(fieldTmpl),
    field.errors.map(function(error) {
      return dd({ class: "error" }, Messages(error.key, error.args))
    }),
    field.infos.map(function(info) {
      return dd({ class: "info" }, Messages(info.key, info.args))
    })
  )
}

helpers.inputText = function(field) {
  return helpers.input(field,
    input({ id: field.name, type: "text", value: field.value })
  )
}

helpers.inputPassord = function(field) {
  return helpers.input(field,
    password({ id: field.name, type: "password" }) // never prefill the password
  )
}
```

These helpers are given for example purpose. Real helpers you might need are implementation specific to your libraries.

Let's create a search form using our new helpers:

```javascript
views.html.searchFormTmpl = function(searchForm) {
  return form({ action: "search", method: "GET" },
    helpers.inputText(searchForm.field("q")),
    button("Search")
  )
}
```

It can generate the following DOM:

```html
<form method="GET" action="search">
  <dl class="error" id="q_field">
    <dt><label for="q">q</label></dt>
    <dd><input value="" id="q" type="text"></dd>
    <dd class="error">error.required</dd>
  </dl>
  <button>Search</button>
</form>
```

We should modify our layout to make the seach form part of the layout.

[Custom](custom.md)
