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
      <td>y</td>
      <td>br</td>
    </tr>
    <tr>
      <td>g</td>
      <td>re</td>
    </tr>
  </tbody>
</table>
```

[Layout](layout.md)
