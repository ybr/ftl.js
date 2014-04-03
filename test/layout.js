describe('Layout use case', function() {
  var h = {};
  ['h1', 'hr', 'div', 'footer', 'table', 'thead', 'tbody', 'th', 'tr', 'td'].forEach(function(tag) { h[tag] = fundomplate(tag) });
  ["hr"].forEach(function(tag) { h[tag] = fundomplate(tag)() });
  var fragment = fundomplate();

  var assert = chai.assert

  it('should return fragment with a layout containing a table of users', function() {
    // HERE IS THE LAYOUT DECLARATION
    function layout(title) {
      return function(block) {
        return fragment(
          h.h1(title),
          h.hr,
          h.div({ "class": "content", "kbd": "lfklrj"},
            block
          ),
          h.hr,
          h.footer("Plan")
        )
      }
    }

    function displayUsers(title, users) {
      // HERE IS THE LAYOUT CALL
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

    assert.equal(dom.childNodes.item(1).tagName, 'HR')

    var div = dom.childNodes.item(2)
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
      assert.equal(column0.innerText, 'First name')

      var column1 = headRow.childNodes.item(1)
      assert.equal(column1.tagName, 'TH')
      assert.equal(column1.innerText, 'Last name')

      var body = block.childNodes.item(1)
      assert.equal(body.tagName, 'TBODY')

      var rowYBR = body.childNodes.item(0)
      assert.equal(rowYBR.tagName, 'TR')

      var column0YBR = rowYBR.childNodes.item(0)
      assert.equal(column0YBR.tagName, 'TD')
      assert.equal(column0YBR.innerText, 'yohann')

      var column1YBR = rowYBR.childNodes.item(1)
      assert.equal(column1YBR.tagName, 'TD')
      assert.equal(column1YBR.innerText, 'bredoux')

      var rowMRN = body.childNodes.item(1)
      assert.equal(rowYBR.tagName, 'TR')

      var column0MRN = rowMRN.childNodes.item(0)
      assert.equal(column0MRN.tagName, 'TD')
      assert.equal(column0MRN.innerText, 'nizar')

      var column1MRN = rowMRN.childNodes.item(1)
      assert.equal(column1MRN.tagName, 'TD')
      assert.equal(column1MRN.innerText, 'mr')

    assert.equal(dom.childNodes.item(3).tagName, 'HR')

    var footer = dom.childNodes.item(4)
    assert.equal(footer.tagName, 'FOOTER')
    assert.equal(footer.innerText, 'Plan')
  })
})
