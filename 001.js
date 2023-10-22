let array =['sanduni','Uthpala','malith' ]
console.log(array);
console.log(array.length);
console.log(array[0]);
console.log(array.indexOf('sanduni'));

console.log(array.push('sahan'));


function displayName(name= "Ayodya"){
  console.log(name);
  return name;


}
displayName();  

let myname =(age= 20) => {
  let name = "sanduni";
  console.log("your name is ${name} and your age is ${age}");
  return (name,age);
}
myname();
