const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 1500)
});

//resolve
promise.then((data) => {
    console.log(data);
})

//reject
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })