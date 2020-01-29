// Write your solution in this file!
let driver = {no: '73-11', street: '185', city: 'Flushing'};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newD = Object.assign({}, driver, { [key]: value });
    return newD;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newD = Object.assign({}, driver);
    delete newD[key];
    return newD;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}