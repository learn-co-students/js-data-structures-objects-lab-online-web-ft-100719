// Write your solution in this file!
const driver = {
  name: "sam"
}


function updateDriverWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value });
}
updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');


function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
};
destructivelyUpdateDriverWithKeyAndValue(driver, 'name', "other");


function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
  
};
deleteFromDriverByKey(driver, 'name')


function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
destructivelyDeleteFromDriverByKey(driver, 'name')
