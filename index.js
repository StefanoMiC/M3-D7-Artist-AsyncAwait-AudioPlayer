// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// promise1.then((value) => {
//   console.log(value);
//   // expected output: "foo"
// });

const sayMyName = (name) => {
  console.log("hello " + name);
};

const myPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = num * 2;
      resolve(result);
    }, 3000);

    if (true) {
        reject("i'm the error");
    }
  });
};

myPromise(4)
  .then((data) => sayMyName(data))
  .catch((err) => console.log("this is the err ", err));
