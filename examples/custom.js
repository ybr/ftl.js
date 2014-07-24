function withRight(right, user) {
  return function(block) {
    var granted = user.rights.indexOf(right) >= 0
    if(granted) return block
    else return fragment()
  }
}

views.html.layout = function(title, me) {
  return function(block) {
    return div(
      withRight("ADMIN", me)( // hyperspace only for an admin user
        a({ href: "https://github.com/ybr/ftl.js" }, "Let's dive into the hyperspace")
      ),
      h1(title),
      block
    )
  }
}

views.html.renderUsersPage = function(users, me) {
  return views.html.layout("Users page", me)(
    fragment(
      p("Here you can see the list of all users"),
      views.html.renderUsersTable(users)
    )
  )
}
