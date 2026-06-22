const students = [
  { name: "John", subject: "Math" },
  { name: "Sam", subject: "Science" },
  { name: "Bob", subject: "Math" },
  { name: "Alex", subject: "Science" }
];


// {
//   Math: ["John", "Bob"],
//   Science: ["Sam", "Alex"]
// }


function groupBySubject(students){

    const map = new Map();

    for (let student of students){
        const sub = student.subject

        if(!map.has(sub)){
            map.set(sub,[])
        }

        map.get(sub).push(student.name)
    }

    return map;

}

console.log(groupBySubject(students))