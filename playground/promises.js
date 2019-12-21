const doworkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    // resolve([43, 34, 4])
    reject('Things ent wrong')

}, 2000)
})

doworkPromise.then((result) => {
console.log('success!', result)
}).catch((error) => {
    console.log('Error', error)
})