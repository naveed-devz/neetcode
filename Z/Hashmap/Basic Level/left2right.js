const arr = [10, 20, 30, 20, 10];

function left2right(arr) {
  const map = new Map();

  for (let ele of arr) {
    if (map.has(ele)) {
      return ele;
    } else {
      map.set(ele, true);
    }
  }
  return map;
}

console.log(left2right(arr))