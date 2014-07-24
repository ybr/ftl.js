views.html.renderUsersTable = function(users) {
  return table(
    thead(
      tr(
        th("First name"),
        th("Last name")
      )
    ),
    tbody(
      users.map(views.html.renderUser) // include here
    )
  )
}
