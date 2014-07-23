describe('Multi-leval layout use case', function() {
  var h = {};
  ['a', 'ul', 'li', 'nav', 'header', 'h1', 'hr', 'div', 'footer', 'table', 'thead', 'tbody', 'th', 'tr', 'td'].forEach(function(tag) { h[tag] = ftl(tag) });
  ["hr"].forEach(function(tag) { h[tag] = ftl(tag)() });
  var fragment = ftl();

  var assert = chai.assert

  it('should return fragment with a layout containing menu containing a table of users', function() {
    // HERE IS THE MAIN LAYOUT DECLARATION
    function layout(title) {
      return function(block) {
        return fragment(
          h.h1(title),
          // HERE IS THE SUB LAYOUT CALL
          navigation(
            fragment(
              h.hr,
              h.div({ "class": "content", "kbd": "lfklrj"},
                block
              ),
              h.hr
            )
          ),
          h.footer("Plan")
        )
      }
    }

    // HERE IS THE SUB LAYOUT DECLARATION
    function navigation(block) {
      return fragment(
        h.header(
          h.nav(
            h.ul(
              h.li(h.a({ href: 'users.html' }, 'All users')),
              h.li(h.a({ href: 'products.html' }, 'All products'))
            )
          )
        ),
        block
      )
    }

    function displayUsers(title, users) {
      // HERE IS THE MAIN LAYOUT CALL
      return layout(title)(
        h.table(
          h.thead(
            h.tr(
              h.th("First name"),
              h.th("Last name")
            )
          ),
          h.tbody(
            users.map(displayOneUser)
          )
        )
      )
    }

    function displayOneUser(user) {
      return h.tr(
        h.td(user.firstname),
        h.td(user.lastname)
      )
    }

    var users = [{
      firstname: "yohann",
      lastname: "bredoux"
    }, {
      firstname: "nizar",
      lastname: "mr"
    }];

    var dom = displayUsers("List of users", users)()

    var h1 = dom.childNodes.item(0)
    assert.equal(h1.tagName, 'H1')

    var header = dom.childNodes.item(1)
    assert.equal(header.tagName, 'HEADER')

    var nav = header.childNodes.item(0)
    assert.equal(nav.tagName, 'NAV')

    var ul = nav.childNodes.item(0)
    assert.equal(ul.tagName, 'UL')

    var liUsers = ul.childNodes.item(0)
    assert.equal(liUsers.tagName, 'LI')

    var aUsers = liUsers.childNodes.item(0)
    assert.equal(aUsers.tagName, 'A')
    assert.equal(aUsers.getAttribute('href'), 'users.html')
    assert.equal(aUsers.innerHTML, 'All users')

    var liProducts = ul.childNodes.item(1)
    assert.equal(liProducts.tagName, 'LI')

    var aProducts = liProducts.childNodes.item(0)
    assert.equal(aProducts.tagName, 'A')
    assert.equal(aProducts.getAttribute('href'), 'products.html')
    assert.equal(aProducts.innerHTML, 'All products')

    assert.equal(dom.childNodes.item(2).tagName, 'HR')

    var div = dom.childNodes.item(3)
    assert.equal(div.tagName, 'DIV')
    assert.equal(div.getAttribute('class'), 'content')
    assert.equal(div.getAttribute('kbd'), 'lfklrj')

    var block = div.childNodes.item(0)
    assert.equal(block.tagName, 'TABLE')

    var head = block.childNodes.item(0)
    assert.equal(head.tagName, 'THEAD')

    var headRow = head.childNodes.item(0)
    assert.equal(headRow.tagName, 'TR')

    var column0 = headRow.childNodes.item(0)
    assert.equal(column0.tagName, 'TH')
    assert.equal(column0.innerHTML, 'First name')

    var column1 = headRow.childNodes.item(1)
    assert.equal(column1.tagName, 'TH')
    assert.equal(column1.innerHTML, 'Last name')

    var body = block.childNodes.item(1)
    assert.equal(body.tagName, 'TBODY')

    var rowYBR = body.childNodes.item(0)
    assert.equal(rowYBR.tagName, 'TR')

    var column0YBR = rowYBR.childNodes.item(0)
    assert.equal(column0YBR.tagName, 'TD')
    assert.equal(column0YBR.innerHTML, 'yohann')

    var column1YBR = rowYBR.childNodes.item(1)
    assert.equal(column1YBR.tagName, 'TD')
    assert.equal(column1YBR.innerHTML, 'bredoux')

    var rowMRN = body.childNodes.item(1)
    assert.equal(rowYBR.tagName, 'TR')

    var column0MRN = rowMRN.childNodes.item(0)
    assert.equal(column0MRN.tagName, 'TD')
    assert.equal(column0MRN.innerHTML, 'nizar')

    var column1MRN = rowMRN.childNodes.item(1)
    assert.equal(column1MRN.tagName, 'TD')
    assert.equal(column1MRN.innerHTML, 'mr')

    assert.equal(dom.childNodes.item(4).tagName, 'HR')

    var footer = dom.childNodes.item(5)
    assert.equal(footer.tagName, 'FOOTER')
    assert.equal(footer.innerHTML, 'Plan')
  })
})
