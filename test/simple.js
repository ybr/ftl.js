describe('Simple use cases', function() {
  var assert = chai.assert

  it('should return a Text element containing "Some text"', function() {
    var elem = fundomplate()("Some text")()
    assert.equal("Some text", elem.childNodes.item(0).nodeValue)
  })

  it('should return a Text element containing "123"', function() {
    var elem = fundomplate()(123)()
    assert.equal("123", elem.childNodes.item(0).nodeValue)
  })

  it('should return a Text element containing "Some" "other" "text"', function() {
    var elem = fundomplate()(["Some", "other", "text"])()
    assert.equal("Some", elem.childNodes.item(0).nodeValue)
    assert.equal("other", elem.childNodes.item(1).nodeValue)
    assert.equal("text", elem.childNodes.item(2).nodeValue)
  })

  it('should return a Text element containing "Some" "123.45"', function() {
    var elem = fundomplate()(["Some", 123.45])()
    assert.equal("Some", elem.childNodes.item(0).nodeValue)
    assert.equal("123.45", elem.childNodes.item(1).nodeValue)
  })

  it('should return a <h1>My title</h1> element', function() {
    var elem = fundomplate("h1")("My title")()
    assert.equal("<h1>My title</h1>", elem.outerHTML)
  })

  it('should return a <form>....</form> element', function() {
    var form = fundomplate("form")({ action: "https://github.com/ybr/fundomplate"},
      fundomplate("fieldset")(
        fundomplate("label")({ "for": "myinput" }, "My input"),
        fundomplate("input")({ type: "text", id: "myinput" })
      ),
      fundomplate("div")({ "class": "actions"},
        fundomplate("button")({ type: "submit" }, "OK")
      )
    )()

    assert.equal(form.tagName, 'FORM')
    assert.equal(form.getAttribute('action'), 'https://github.com/ybr/fundomplate')

    var fieldset = form.childNodes.item(0)
    assert.equal(fieldset.tagName, 'FIELDSET')

    var label = fieldset.childNodes.item(0)
    assert.equal(label.tagName, 'LABEL')
    assert.equal(label.getAttribute('for'), 'myinput')

    var labelText = label.childNodes.item(0)
    assert.equal(labelText.nodeName, '#text')
    assert.equal(labelText.nodeValue, 'My input')

    var input = fieldset.childNodes.item(1)
    assert.equal(input.tagName, 'INPUT')
    assert.equal(input.getAttribute('id'), 'myinput')
    assert.equal(input.getAttribute('type'), 'text')

    var actions = form.childNodes.item(1)
    assert.equal(actions.tagName, 'DIV')
    assert.equal(actions.getAttribute('class'), 'actions')

    var button = actions.childNodes.item(0)
    assert.equal(button.tagName, 'BUTTON')
    assert.equal(button.getAttribute('type'), 'submit')

    var buttonText = button.childNodes.item(0)
    assert.equal(buttonText.nodeName, '#text')
    assert.equal(buttonText.nodeValue, 'OK')
  })
})
