console.log("Hello World!");

console.log(typeof 42);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {a: 1});
console.log(typeof [1, 2, 3]);
console.log(typeof function hello() {});

let adult = true;
const PROFESSION = "instructor";


if (adult) {
    // var is global
    var myName = "Bob";
    // let is local
    let myAge = 25;
}

console.log(myName);



try {
    console.log(age);
  } catch (error) {
    console.log("Error: age is not defined");
  }


  try {
    PROFESSION = "teacher";
  } catch (error) {
    console.log("Error: cannot change constant value");
  }


