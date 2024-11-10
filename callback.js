// console.log("Hello");

greet = (callback) =>{
    console.log("Hello From Greet");
    return callback();
}
const callback = () =>{
   return console.log("I am Callback");
}
// greet(callback);


const a  = [-1,-4,7,9,-3,2,6,-7,7,3,9]

const checkNeg = (num) =>{
    return num < 0; 
}

// console.log( a.findIndex(checkNeg));

// console.log(a);

// a.forEach((num)=>{
//     console.log(num  + " = " + checkNeg(num));
// })

console.log("🎉🎁");

