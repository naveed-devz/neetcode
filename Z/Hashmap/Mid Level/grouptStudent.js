const students = [
  { name: "John", class: "10A" },
  { name: "Sam", class: "10B" },
  { name: "Bob", class: "10A" },
  { name: "Alex", class: "10B" }
];


// {
//   "10A": [
//     { name: "John", class: "10A" },
//     { name: "Bob", class: "10A" }
//   ],
//   "10B": [
//     { name: "Sam", class: "10B" },
//     { name: "Alex", class: "10B" }
//   ]
// }


function groupStudentBygrade(students){

   const map = new Map();

   for(let student of students){
    const cls = student.class;

    if(!map.has(cls)){
        map.set(cls,[])
    }

    map.get(cls).push(student)
   }

   return map;
}

console.log(groupStudentBygrade(students))