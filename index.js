function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue)
  return copy
}


// returnNewFunctionOf(functionToBeCopied, thisValue): Here, we ask you to write a function
// that returns a copy of the function passed through, but sets the this value of the function's copy.
