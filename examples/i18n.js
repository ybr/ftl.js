function Messages(key) {
  var translations = {
    fr: {
      "user.firstName": "Prénom",
      "user.lastName": "Nom"
    },
    en: {
      "user.firstName": "First name",
      "user.lastName": "Last name"
    }
  }

  var lang = navigator.language || navigator.userLanguage
  return translations[lang][key] || key
}

views.html.renderUsersTable = function(users) {
  return table(
    thead(
      tr(
        th(Messages("user.firstName")), // translation here
        th(Messages("user.lastName")) // translation here
      )
    ),
    tbody(
      users.map(views.html.renderUser)
    )
  )
}
