function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisArg, argument) {
  return fn.call(thisArg, argument);
}

function setThisWithApply(fn, thisArg, argument) {
  return fn.apply(thisArg, argument);
}

function returnNewFunctionOf(functionToBeCopied, thisArg) {
  const newFunction = functionToBeCopied.bind(thisArg)
  return newFunction
}
