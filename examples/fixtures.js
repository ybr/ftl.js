var user0 = { firstName: "y", lastName: "br", rights: ["read"] }
var user1 = { firstName: "g", lastName: "re" }

var users = [user0, user1]

var admin = { rights: ["ADMIN", "READ"] }

var formWithErrors = {
  field: function(name) {
    return {
      hasErrors: function() { return true },
      errors: [{ key: "error.required" }],
      infos: [],
      name: name,
      value: ""
    }
  }
}
