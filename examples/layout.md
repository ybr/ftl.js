# ftl.js

Let's build DOM for a table of users within a layout :

```javascript
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
```

It can generate the following DOM :

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
        <td>y</td>
        <td>br</td>
      </tr>
      <tr>
        <td>g</td>
        <td>re</td>
      </tr>
    </tbody>
  </table>
</div>
```

[Internationalization](i18n.md)
