describe('Simple use cases', function() {
  var assert = chai.assert

  it('should return a Text element containing "Some text"', function() {
    var elem = ftl()("Some text")()
    assert.equal("Some text", elem.textContent)
  })

  it('should return a Text element containing "123"', function() {
    var elem = ftl()(123)()
    assert.equal("123", elem.textContent)
  })

  it('should return a Text element containing "Some" "other" "text"', function() {
    var elem = ftl()(["Some", "other", "text"])()
    assert.equal("Someothertext", elem.textContent)
  })

  it('should return a Text element containing "Some" "123.45"', function() {
    var elem = ftl()(["Some", 123.45])()
    assert.equal("Some123.45", elem.textContent)
  })

  it('should return a <h1>My title</h1> element', function() {
    var h1 = ftl("h1")("My title")()
    assert.equal(h1.tagName, 'H1')

    var h1Text = h1.childNodes.item(0)
    assert.equal(h1Text.nodeName, '#text')
    assert.equal(h1Text.nodeValue, 'My title')
  })

  it('should return a <form>....</form> element', function() {
    var form = ftl("form")({ action: "https://github.com/ybr/ftl"},
      ftl("fieldset")(
        ftl("label")({ "for": "myinput" }, "My input"),
        ftl("input")({ type: "text", id: "myinput" })
      ),
      ftl("div")({ "class": "actions"},
        ftl("button")({ type: "submit" }, "OK")
      )
    )()

    assert.equal(form.tagName, 'FORM')
    assert.equal(form.getAttribute('action'), 'https://github.com/ybr/ftl')

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
