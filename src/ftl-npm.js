(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        window.ftl = definition();
    }
})(function() {
/*! import ftl.js */
return ftl;
});
