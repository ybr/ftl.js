describe('If you feel confident use cases', function() {
  ['h1', 'form', 'fieldset', 'label', 'input', 'div', 'button'].forEach(function(tag) { window[tag] = ftl(tag) });
  var fragment = ftl();

  var assert = chai.assert

  it('should return a Text element containing "Some text"', function() {
    var elem = fragment("Some text")()
    assert.equal("Some text", elem.textContent)
  })

  it('should return a Text element containing "123"', function() {
    var elem = fragment(123)()
    assert.equal("123", elem.textContent)
  })

  it('should return a Text element containing "Some" "other" "text"', function() {
    var elem = fragment(["Some", "other", "text"])()
    assert.equal("Someothertext", elem.textContent)
  })

  it('should return a Text element containing "Some" "123.45"', function() {
    var elem = fragment(["Some", 123.45])()
    assert.equal("Some123.45", elem.textContent)
  })

  it('should return a <h1>My title</h1> element', function() {
    var elem = h1("My title")()
    assert.equal("<h1>My title</h1>", elem.outerHTML)
  })

  it('should return a <form>....</form> element', function() {
    var formElem = form({ action: "https://github.com/ybr/ftl"},
      fieldset(
        label({ "for": "myinput" }, "My input"),
        input({ type: "text", id: "myinput" })
      ),
      div({ "class": "actions"},
        button({ type: "submit" }, "OK")
      )
    )()

    assert.equal(formElem.tagName, 'FORM')
    assert.equal(formElem.getAttribute('action'), 'https://github.com/ybr/ftl')

    var fieldsetElem = formElem.childNodes.item(0)
    assert.equal(fieldsetElem.tagName, 'FIELDSET')

    var labelElem = fieldsetElem.childNodes.item(0)
    assert.equal(labelElem.tagName, 'LABEL')
    assert.equal(labelElem.getAttribute('for'), 'myinput')

    var labelText = labelElem.childNodes.item(0)
    assert.equal(labelText.nodeName, '#text')
    assert.equal(labelText.nodeValue, 'My input')

    var inputElem = fieldsetElem.childNodes.item(1)
    assert.equal(inputElem.tagName, 'INPUT')
    assert.equal(inputElem.getAttribute('id'), 'myinput')
    assert.equal(inputElem.getAttribute('type'), 'text')

    var actionsElem = formElem.childNodes.item(1)
    assert.equal(actionsElem.tagName, 'DIV')
    assert.equal(actionsElem.getAttribute('class'), 'actions')

    var buttonElem = actionsElem.childNodes.item(0)
    assert.equal(buttonElem.tagName, 'BUTTON')
    assert.equal(buttonElem.getAttribute('type'), 'submit')

    var buttonText = buttonElem.childNodes.item(0)
    assert.equal(buttonText.nodeName, '#text')
    assert.equal(buttonText.nodeValue, 'OK')
  })
})
