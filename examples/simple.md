# ftl

Let's build DOM for a user as one row in a table :

```javascript
views.html.renderUser = function(user) {
  return tr(
    td(user.firstName),
    td(user.lastName)
  )
}
```

It creates the following DOM :

```
<tr>
  <td>User first name</td>
  <td>User last name</td>
</tr>
```

[Include](examples/include.md)
