views.html.layout = function(title) {
  return function(block) {
    return div(
      h1(title),
      block
    )
  }
}

views.html.renderUsersPage = function(users) {
  return views.html.layout("Users page")(
    fragment(
      p("Here you can see the list of all users"),
      views.html.renderUsersTable(users)
    )
  )
}
