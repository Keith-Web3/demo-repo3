const myName = "Ola"
const myPromise = new Promise((resolve, reject) => {
  myName.length > 4 ? resolve("Nice, long name") : reject("a short, beautiful name")
})

myPromise
  .then(value => console.log(`${myName} is a ${value}.`))
  .catch(error => console.log(`${myName} is ${error}`))
  .finally(console.log("Promise executed."))

const anotherPromise = new Promise((resolve, reject) => {
  resolve(5)
})
anotherPromise
  .then(value => console.log(value * 2))