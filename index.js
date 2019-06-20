function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, value, argument){
  return fn.call(value, argument)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
