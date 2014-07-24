# ftl

Let's build DOM for a table of users within a layout :

```javascript
views.html.layout = function(title) {
  return function(block) {
    return div(
      h1(title),
      form({ action: "search", method: "GET" },
        input({ type: "text", name: "q" }),
        button("Search")
      ),
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
```

It creates the following DOM :

```
<div>
  <h1>Users page</h1>
  <p>Here you can see the list of all users</p>
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
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

[Internationalization](i18n.md)
