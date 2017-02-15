'use strict';


function bubbleSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 4, 2, 8]));
