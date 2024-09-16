//# primitive

// 7 types - string,number,boolean,null,undefined,,symbol,bigInt

const score = 100
const scoreValue = 100.3     //  number  
 
//const isLoggedIn = fulse  // boolean
const outSideTemp = null
let userEmail;              //undefined

//const sym1 = symbol('123');
//const sym2 = symbol('123');      //symbolp;
//console.log(sym1 === sym2);

// Reference (non- primitive)


// Array,objects,functions
const heros = ["saktiman","doga"]   //Array

let myObj = {
    name: "pintu",  //object
    age: 29,
}

 const myFunction = function(){
   console.log("hello world")    //function
}

 
console.log(typeof score);





//***************************************************** */
             //memory

// stack memory(primitive),   heap memory (Non primitive)      
  //copy
let myYoutubeName = "pintu-youtube"
let anotherName = myYoutubeName
anotherName = "my-utube"

console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
  email:"pintu@google.com",
   upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)




