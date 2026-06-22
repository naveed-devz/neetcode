const marks = [
  { student: "John", marks: 90 },
  { student: "John", marks: 80 },
  { student: "Sam", marks: 70 },
  { student: "Sam", marks: 60 }
];

// {
//   John: 170,
//   Sam: 130
// }

// wrong sol
function total_marks(marks){

    const map = new Map();

    for(let std of marks){
        const total = std.student;

        if(!map.has(total)){
            map.set(total,0)
        }

        map.get(total).reduce((acc,value) => acc+value)
    }

}

console.log(total_marks(marks))