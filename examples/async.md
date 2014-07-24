# ftl

Asynchronous is almost everywhere. Unfortunately ftl is synchronous.

But, but !!! Functions saves the day.

Since ftl handles functions that returns DOM elements. You can write a function that triggers some asynchronous process, render a spinner synchronously and once the asynchronous process is done then replaces the spinner with the valuable content.

Something like:

```javascript
function async(Qblock) {
  return function() {
    var dom = spinner()
    Qblock.andThen(function(block) {
      dom.parentElement.replaceChild(block(), dom)
      return dom
    })
    return dom
  }
}
```

---

I think it can be achieved through Q and if you want some Q over ajax library you can use [Qajax](https://github.com/gre/qajax).
