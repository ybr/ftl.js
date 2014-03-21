(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        window.fundomplate = definition();
    }
})(function() {
/*! import fundomplate.js */
return fundomplate;
});
