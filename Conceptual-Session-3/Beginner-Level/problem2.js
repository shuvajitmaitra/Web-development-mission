// Give a file as input and check it js file or not if js file return true or false
function isJavaScriptFile(file) {
    if (typeof file !== 'string' || file.endsWith() !== '.js') {
        return 'please provide original file';
    }
    if (file.toLowerCase() === 'js') {
        return true;
    }
    else {
        return false;
    }
}
// const myFile = jsafa;
console.log(isJavaScriptFile(file.js));
