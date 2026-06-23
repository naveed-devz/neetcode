========================================
HASHING PRACTICE SET - LEVEL 1
========================================

Problem 1

Statement:
Count the frequency of each number.

Input:
const arr = [1, 1, 2, 3, 3, 3, 4];

Expected Output:
{
  1: 2,
  2: 1,
  3: 3,
  4: 1
} 

----------------------------------------

Problem 2

Statement:
Count the frequency of each character.

Input:
const str = "javascript";

Expected Output:
{
  j: 1,
  a: 2,
  v: 1,
  s: 1,
  c: 1,
  r: 1,
  i: 1,
  p: 1,
  t: 1
}

----------------------------------------

Problem 3

Statement:
Find all duplicate numbers.

Input:
const arr = [1, 2, 3, 4, 2, 5, 1];

Expected Output:
[1, 2]

----------------------------------------

Problem 4

Statement:
Return the first duplicate number encountered while traversing from left to right.

Input:
const arr = [10, 20, 30, 20, 10];

Expected Output:
20

----------------------------------------

Problem 5

Statement:
Return an array containing only unique values.

Input:
const arr = [1, 2, 2, 3, 4, 4, 5];

Expected Output:
[1, 2, 3, 4, 5]

----------------------------------------

Problem 6

Statement:
Calculate total marks obtained by each student.

Input:
const marks = [
  { student: "John", marks: 90 },
  { student: "John", marks: 80 },
  { student: "Sam", marks: 70 },
  { student: "Sam", marks: 60 }
];

Expected Output:
{
  John: 170,
  Sam: 130
}

----------------------------------------

Problem 7

Statement:
Calculate total sales amount for each store.

Input:
const sales = [
  { store: "A", amount: 100 },
  { store: "B", amount: 200 },
  { store: "A", amount: 50 },
  { store: "C", amount: 300 }
];

Expected Output:
{
  A: 150,
  B: 200,
  C: 300
}

----------------------------------------

Problem 8

Statement:
Group students by class.

Input:
const students = [
  { name: "John", class: "10A" },
  { name: "Sam", class: "10B" },
  { name: "Bob", class: "10A" }
];

Expected Output:
{
  "10A": [
    { name: "John", class: "10A" },
    { name: "Bob", class: "10A" }
  ],
  "10B": [
    { name: "Sam", class: "10B" }
  ]
}

----------------------------------------

Problem 9

Statement:
Group order IDs by user.

Input:
const orders = [
  { userId: 1, orderId: 101 },
  { userId: 2, orderId: 102 },
  { userId: 1, orderId: 103 }
];

Expected Output:
{
  1: [101, 103],
  2: [102]
}

----------------------------------------

Problem 10

Statement:
Group employee names by department.

Input:
const employees = [
  { name: "John", dept: "IT" },
  { name: "Sam", dept: "HR" },
  { name: "Bob", dept: "IT" }
];

Expected Output:
{
  IT: ["John", "Bob"],
  HR: ["Sam"]
}

----------------------------------------

Problem 11

Statement:
Calculate total inventory quantity for each item.

Input:
const inventory = [
  { item: "Apple", qty: 5 },
  { item: "Banana", qty: 3 },
  { item: "Apple", qty: 2 }
];

Expected Output:
{
  Apple: 7,
  Banana: 3
}

----------------------------------------

Problem 12

Statement:
Convert the users array into an object where id is the key.

Input:
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Bob" }
];

Expected Output:
{
  1: { id: 1, name: "John" },
  2: { id: 2, name: "Sam" },
  3: { id: 3, name: "Bob" }
}

----------------------------------------

Problem 13

Statement:
Find the first non-repeating character.

Input:
const str = "aabbccddef";

Expected Output:
"e"

----------------------------------------

Problem 14

Statement:
Find the number that appears most frequently.

Input:
const arr = [1, 1, 2, 3, 3, 3, 4];

Expected Output:
3

----------------------------------------

Problem 15

Statement:
Determine whether any two numbers add up to the target.

Input:
const nums = [2, 7, 11, 15];
const target = 9;

Expected Output:
true

----------------------------------------

Problem 16

Statement:
Return the indices of two numbers whose sum equals the target.

Input:
const nums = [2, 7, 11, 15];
const target = 9;

Expected Output:
[0, 1]

----------------------------------------

Problem 17

Statement:
Find all users who have placed more than one order.

Input:
const orders = [
  { userId: 1, orderId: 101 },
  { userId: 2, orderId: 102 },
  { userId: 1, orderId: 103 },
  { userId: 3, orderId: 104 },
  { userId: 2, orderId: 105 }
];

Expected Output:
[1, 2]

----------------------------------------

Problem 18

Statement:
Count how many students belong to each class.

Input:
const students = [
  { name: "John", class: "10A" },
  { name: "Sam", class: "10B" },
  { name: "Bob", class: "10A" },
  { name: "Alex", class: "10A" }
];

Expected Output:
{
  "10A": 3,
  "10B": 1
}

----------------------------------------

Problem 19

Statement:
Find the store with the highest total sales.

Input:
const sales = [
  { store: "A", amount: 100 },
  { store: "B", amount: 500 },
  { store: "A", amount: 200 },
  { store: "C", amount: 300 }
];

Expected Output:
"B"

----------------------------------------

Problem 20

Statement:
Group words that are anagrams of each other.

Input:
const words = [
  "eat",
  "tea",
  "tan",
  "ate",
  "nat",
  "bat"
];

Expected Output:
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

Start with Problems **1–10 only**. Don't code immediately. For each one, first write:

```text
Key:
Value:
Map or Set:
Expected Data Structure:
```

That habit is what builds strong hashing intuition.
