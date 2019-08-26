var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, para) {
  var secondArray = array;
  secondArray = [para, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, para) {
  var myArray = array;
  array.push(para);
  return myArray;
}
