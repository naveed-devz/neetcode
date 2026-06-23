const arr = [1, 2, 3, 4, 2, 5, 1];

function dup(arr) {
  let map = new Map();
  const new_arr = [];

  for (let ele of arr) {
    if (map.has(ele)) {
        new_arr.push(ele)
    } else {
        map.set(ele, true)
    }
  }

  return new_arr;
}

console.log(dup(arr));
