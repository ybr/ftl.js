"use strict"

function fundomplate(tag) {
  return function() {
    var args = arguments
    return function(elemFactory) {
      // provide your own element factory
      var doc = elemFactory || document
      // https://developers.google.com/speed/articles/javascript-dom
      var current = tag?doc.createElement(tag):doc.createDocumentFragment()
      for(var i = 0; i < args.length; i++) {
        var arg = args[i]
        if(typeof(arg) == "function") current.appendChild(arg(doc))
        else if(arg instanceof Array) arg.forEach(function(content) { current.appendChild(fundomplate()(content)(doc)) })
        else if(typeof(arg) == "object") {
          for(var key in arg) {
            current.setAttribute(key, arg[key])
          }
        }
        else current.appendChild(doc.createTextNode(arg))
      }
      return current
    }
  }
}
