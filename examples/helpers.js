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

views.html.searchFormTmpl = function(searchForm) {
  return form({ action: "search", method: "GET" },
    helpers.inputText(searchForm.field("q")),
    button("Search")
  )
}
