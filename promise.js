"use strict";
// https://www.youtube.com/watch?v=JB_yU6Oe2eE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=12
// Promise is a Javascript object for asynchronous operation.
// 1. state 기능이 처리되었는지, 처리중인지 등 상태에 대해 알 수 있어야 한다.
// 2. 생산자와 소비자 차이점을 잘 이해하고 있어야 한다. Producer VS Consumer

// 1. Producer
// When new Promise is created, executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work.. 시간이 걸리는, 동기적인 처리가 비효율적인 작업들임
  // 네트워크에서 많은 양의 데이터를 가져오거나, 파일에서 대용양 자료를 가져오기 때문(network, read big files)
  console.log("doing something ... ! ");
  setTimeout(() => {
    resolve("ellie");
    // 잘못된 코드가 실행되었을 때, 에러처리를 위해 reject가 쓰인다. Error 는 JS Object 이다.
    // reject(new Error("no network ~~!!"));
  }, 2000);
});

// 2. Consumer : then, catch, finally 로 값을 받아올 수 있음.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error ~ ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
