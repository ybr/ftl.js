(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        window.ftl = definition();
    }
})(function() {
/*
 * Stateful functional DOM templating
 */

/*
 * ftl accepts an optional nodeName and returns a builder function
 * If nodeName is defined a specialized DOM element builder function is returned
 * otherwise a document fragment builder function is returned
 *
 * - ftl("h1") returns a builder function for h1
 * - ftl() returns a builder function for document fragment
 */
function ftl(nodeName) {
  "use strict";

  /*
   * This builder function accepts parameters.
   * Returns a DOM element factory-populator function (a function that will create and populate DOM element later).
   *
   * Paramters can be a type :
   * - Function, another builder function that will be used to build children elements
   * - Array, each element will cause a recursive use of ftl
   * - Object, each key/value pair is used to set attributes of the created DOM element
   * - otherwise the argument is appended as a text element child
   */
  return function() {
    // keep args of the builder in the closure for later populating
    var args = arguments;
    /*
     * This factory-populator function accepts an optional factory function of DOM elements.
     * Returns a populated DOM element with the specified node name, children and attributes.
     *
     * This factory-population function knows how to:
     * - delegate creation of element
     * - populate element
     * By default the DOM element factory is "document", it is used to create an element or document fragment.
     */
    return function(elemFactory) {
      // provide your own element factory
      var doc = elemFactory || document;
      // https://developers.google.com/speed/articles/javascript-dom
      var currentElem = nodeName?doc.createElement(nodeName):doc.createDocumentFragment();

      function recurseOnThing(thing) { currentElem.appendChild(ftl()(thing)(doc)); }

      // iterate overs builder arguments to decide how the created DOM element shall be populated
      for(var i = 0; i < args.length; i++) {
        var arg = args[i];
        // a factory-populator function, call it with the element factory to get a DOM element
        if(typeof(arg) == "function") currentElem.appendChild(arg(doc));
        // an array of things to recurse on
        else if(arg instanceof Array) arg.forEach(recurseOnThing);
        // a map of key/value pairs (json object) use them as DOM attributes
        else if(typeof(arg) == "object") {
          for(var key in arg) {
            currentElem.setAttribute(key, arg[key]);
          }
        }
        // otherwise just append as a text element child
        else currentElem.appendChild(doc.createTextNode(arg));
      }
      // the created and populated DOM element
      return currentElem;
    };
  };
}

return ftl;
});
