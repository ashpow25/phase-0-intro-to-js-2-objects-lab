// Write your solution in this file!
var employee = new Object ({});

var obj = { employee }

function updateEmployeeWithKeyAndValue(employee, key, value){
  return Object.assign({}, obj, {[key]: value})
};

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
  object[key] = value
  return object
};

var newObj = Object.assign({}, obj);
function deleteFromEmployeeByKey(object, key){
  delete newObj[key];
  return newObj
};

function destructivelyDeleteFromEmployeeByKey(object, key){
  delete object[key]
  return object
}