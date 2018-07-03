const request = require('request');
const url = 'https://www.google.com';
const url1 = 'https://www.medium.com';
const url2 = 'https://www.flipkart.com';
const url3 = 'https://www.flipkart1.com';

// const sum = (a, b) => a + b;

// console.log(sum(5,6))

// const requestCallback = (url) => {
//   request(url, (err, res) => {
//     if (err) {
//       console.log('Error', err);
//       return;
//     }
//     console.log(res);
//   });
// }

// const requestPromise = (url) => new Promise((resolve, reject) => {
//   request(url, (err, res) => {
//     if (err) {
//       reject(err)
//     }
//     resolve(url)
//   })
// })

// requestPromise(url2)
//   .then((res) => {
//     console.log('Promise',res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// const p = Promise.all([
//   requestPromise(url),
//   requestPromise(url1),
//   requestPromise(url2)
// ]);
// p.then(res => console.log(res))

// const requestModern = async (url, url1, url2) => {
//   try {
//     console.log(sum(6,7));
//     console.log('Await',await requestPromise(url));
//     console.log(await requestPromise(url1));
//     console.log(await requestPromise(url2));
//   }
//   catch (e) {
//     console.log(e);
//   }
// }

// requestModern(url, url1, url2)


// const requestPromise = (url) => new Promise((resolve, reject) => {
//   request(url, (err, res) => {
//     if (err) {
//       reject(err)
//     }
//     resolve(url)
//   })
// })

const myPromiseObj = (url) => {
  myPromiseObj.abc = 5
  myPromiseObj.then = (success) => {
    myPromiseObj.success = success;
  }
  myPromiseObj.catch = (failure) => {
    myPromiseObj.failure = failure;
  }
  request(url, (err, res) => {
    if (err) {
      return myPromiseObj.failure(err);
    }
    return myPromiseObj.success(url);
  })
  return myPromiseObj;
}


myPromiseObj(url2)
.then((res) => {
  console.log(myPromiseObj.then);
  console.log('then here', res);
})
// .catch((err) => {
//   console.log('catch');
// })

// let success = (res) => {
//   console.log('then here', res);
// }
// let failure = (err) => {
//   console.log('catch');
// }
// console.log(success);
// myPromiseObj(url2,
//   success, 
//   failure
// )


// const a = {
//   then: () => {}
// }