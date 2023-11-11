/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("1 sec is passed");
      }, 1 * 1000);
    });
  }
  
  function waitTwoSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("2 sec is passed");
      }, 2 * 1000);
    });
  }
  
  function waitThreeSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("3 sec is passed");
      }, 3 * 1000);
    });
  }
  
  async function calculateTime() {
    const start = new Date().getSeconds();
    const res1 = await waitOneSecond();
    const res2 = await waitTwoSecond();
    const res3 = await waitThreeSecond();
    console.log(res1);
    console.log(res2);
    console.log(res3);
    const end = new Date().getSeconds();
    console.log(end - start);
  }
  
  calculateTime();
  