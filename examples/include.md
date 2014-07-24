# ftl.js

Let's build DOM for a table of users :

```javascript
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
```

It can generate the following DOM :

```
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
```

[Layout](layout.md)
