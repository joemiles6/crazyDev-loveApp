
const doworkCllback = (callback) => {
setTimeout(() => {
    callback( undefined, 'worked sucessfully')
}, 2000);
}
doworkCllback((error, result) => {
if(error) {
    return console.log(error)
}
console.log(result)
})