describe('Simple use cases', function() {
  it('should return a Text element containing "Some text"', function() {
    var elem = fundomplate()("Some text")()
    chai.assert.equal("Some text", elem.textContent)
  })

  it('should return a Text element containing "123"', function() {
    var elem = fundomplate()(123)()
    chai.assert.equal("123", elem.textContent)
  })

  it('should return a Text element containing "Some" "other" "text"', function() {
    var elem = fundomplate()(["Some", "other", "text"])()
    chai.assert.equal("Someothertext", elem.textContent)
  })

  it('should return a Text element containing "Some" "123.45"', function() {
    var elem = fundomplate()(["Some", 123.45])()
    chai.assert.equal("Some123.45", elem.textContent)
  })

  it('should return a <h1>My title</h1> element', function() {
    var elem = fundomplate("h1")("My title")()
    chai.assert.equal("<h1>My title</h1>", elem.outerHTML)
  })

  it('should return a <form>....</form> element', function() {
    var elem = fundomplate("form")({ action: "https://github.com/ybr/fundomplate"},
      fundomplate("fieldset")(
        fundomplate("label")({ "for": "myinput" }, "My input"),
        fundomplate("input")({ type: "text", id: "myinput" })
      ),
      fundomplate("div")({ "class": "actions"},
        fundomplate("button")({ type: "submit" }, "OK")
      )
    )()
    chai.assert.equal(elem.tagName, "FORM")
    chai.assert.equal('<form action="https://github.com/ybr/fundomplate"><fieldset><label for="myinput">My input</label><input id="myinput" type="text"></fieldset><div class="actions"><button type="submit">OK</button></div></form>', elem.outerHTML)
  })
})
