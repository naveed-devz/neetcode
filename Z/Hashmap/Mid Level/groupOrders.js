const orders = [
  { userId: 1, orderId: 101 },
  { userId: 2, orderId: 102 },
  { userId: 1, orderId: 103 },
  { userId: 3, orderId: 104 },
];

// {
//   1: [101, 103],
//   2: [102],
//   3: [104]
// }

function groupOrders(orders) {
  const map = new Map();

  for (let order of orders) {
    const group = order.userId

    if(!map.has(group)){
        map.set(group, [])
    }

    map.get(group).push(order.orderId)
  }

  return map;
}

console.log(groupOrders(orders));
