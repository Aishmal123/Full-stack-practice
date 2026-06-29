// let arr=[1,4,6,35,3]
// let higgest=[...new Set(arr)].sort((a,b)=>b-a)[1];
// console.log(higgest)
// //arr
// let find1=arr.find(arr=>arr===11);
// console.log(find1)
// let filter1=arr.filter(arr=>arr>=5);
// console.log(filter1)
// function greet(name,callBack) {

// const { use } = require("react");

    
//     console.log("hello" + name)
    
// }
// // console.log(greet("aishmal"))
// greet("aishmal")
//  arr=[2,5,353,676,212,768,3225]
// let highest=[...new Set(arr)].sort((a,b)=>b-a)[1]
// console.log(highest)
// // arr = [2,5,353,676,212,768,3225];

// // let highest = [...new Set(arr)].sort((a,b) => b-a)[1];

// // console.log(highest);
// // let sum= arr.reduce((total,num)=>total+num,[0])
// // console.log(sum)
// // let arr = [1, 2, 3, 4];

// let sum23 = arr.reduce((total, num) => total + num, 0);

// console.log(sum23);
// let sum1=arr.map((total,num)=>total +num,0)
// console.log(sum1)
// let sum=0;
// let sum2=arr.map(num=>{
//     return sum+=num
// })
// console.log(sum2)
// let a=[23,45,232,2,1,32]
// let filter=a.filter(num=>num===3)
// console.log(filter)
// let students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 80 },
//   { name: "Ahmed", marks: 30 },
//   { name: "Ayesha", marks: 90 },
//   { name: "Usman", marks: 55 }
// ];
// let filter2=students.filter(students=>students.marks>70)
// console.log(filter2)
// let filter3=students.find(students=>students.marks===90)
// console.log(filter3)
// let filter4=students.find(students=>students.name==="Sara")
// console.log(filter4)
// let users = [
//   { id: 1, name: "Ali", age: 22, city: "Lahore", active: true },
//   { id: 2, name: "Sara", age: 19, city: "Karachi", active: false },
//   { id: 3, name: "Ahmed", age: 25, city: "Lahore", active: true },
//   { id: 4, name: "Ayesha", age: 30, city: "Islamabad", active: true },
//   { id: 5, name: "Usman", age: 17, city: "Lahore", active: false }
// ];
// let loggedIn=users.filter(users=>users.active===true)
// console.log(loggedIn)
// 🔹 Task 2 (FILTER + CONDITION)

// Get users who:

// city = "Lahore"
// AND age >= 20
// let correctUser=users.filter(users=>users.city==="Lahore" && users.age>=20)
// console.log(correctUser)
// Task 3 (MAP)

// Convert active users into this format:

// ["Ali from Lahore", "Ahmed from Lahore", "Ayesha from Islamabad"]
// let activeUser= users.filter(users=>users.active===true)
// let arr6=activeUser.map(users=>`${user.name} from ${user.city}`)
// console.log(arr6)

// let activeUser = users.filter(users => users.active === true);

// let arr6 = activeUser.map(users => `${users.name} from ${users.city}`);

// console.log(arr6);
// let activeUser1 = users.filter(users => users.active === false);
// let activeUSers= activeUser1.map(users=>`${users.name} from ${users.city}`)
// console.log(activeUSers)

// 🔹 Task 4 (FIND)

// Find user with:

// id = 
console.log(typeof typeof 1);
function test() {
  console.log(this);
}

test();