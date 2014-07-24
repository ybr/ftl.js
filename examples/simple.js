views.html.renderUser = function(user) {
  return tr(
    td(user.firstName),
    td(user.lastName)
  )
}
