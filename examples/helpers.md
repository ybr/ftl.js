# ftl

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
    field.errors.map(function(err) {
      dd({ class: "error" }, Messages(error.key, error.args))
    })
    field.infos.map(function(info) {
      dd({ class: "info" }, Messages(info.key, info.args))
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
    password({ id: field.name, type: "text" }) // never prefill the password
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
<form action="search" method="GET">
  <dl id="q_field" class="error">
    <dt><label for="q">q</label></dt>
    <dd><input type="text" id="q" value=""></dd>
    <dd class="error">error.required</dd>
  </dl>
  <button>Search</button>
</form>
```

We should modify our layout to make the seach form part of the layout.

[Custom](custom.md)
