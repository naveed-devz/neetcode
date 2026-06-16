// "use strict"
// x=23
// console.log(x)



greet();
function greet() {
  console.log("Hello!");
}

//ans Hello


var speak = function (){
    console.log("speak")
}
speak();

// speak is not a function is the ans here why because the speak is decalred but we have initialised  a function it can not be hoisted


var x = 10;
function test() {
  console.log(x);
  var x = 20;
}
test();

// the a

var a = 1;
function foo() {
  console.log(a);
  a = 2;
}
foo();
console.log(a ,"this one gets execute first");


