function justInvoke (someFunction) {
  return someFunction()
}

function setThisWithCall(someFunction, thisValue, arg) {
  return someFunction.call(thisValue, arg);
}

function setThisWithApply(someFunction, thisValue, args) {
  return someFunction.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
