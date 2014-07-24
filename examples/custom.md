# ftl

You can promote the use of any good practice in your point of view by providing functions. Like enforcing placeholder, tooltip, explaination on form fields.

You can build any logic (or maybe almost) you can dream of in your template.

For instance, I would like to have some part of my templates not rendered unless the user is an admin.

The following function renders a template only if the user has been authorized:

```javascript
function withRight(right, user) {
  return function(block) {
    var granted = user.rights.indexOf(right) >= 0
    if(granted) return block
    else return fragment()
  }
}
```



I would like to have some super user behaviour on all pages:

```javascript
views.html.layout = function(title, me) {
  return function(block) {
    return div(
      withRight("admin", me)( // hyperspace only for an admin user
        a({ href: "https://github.com/ybr/ftl" }, "Let's dive into the hyperspace")
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
```

It can generate the following DOM, if the user has the "admin" right:

```html
<div>
  <a href="https://github.com/ybr/ftl">Let's go into the hyperspace</a>
  <h1>Users page</h1>
  <p>Here you can see the list of all users</p>
  <table>
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>User0 first name</td>
        <td>User0 last name</td>
      </tr>
      <tr>
        <td>User1 first name</td>
        <td>User1 last name</td>
      </tr>
    </tbody>
  </table>
</div>
```

[Asynchronous](async.md)
