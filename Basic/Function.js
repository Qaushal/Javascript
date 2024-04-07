// const user = {
//     username: "kaushal",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// //passing object externally
// // handleObject(user) 

// //passing object internally
// handleObject({
//     username: "sam",
//     price: 399
// })
// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// //passing Array externally
// // console.log(returnSecondValue(myNewArray));

// //passing Array internally
// console.log(returnSecondValue([200, 400, 500, 1000]));

//Asyc Funtion

function loops(){
    let a =0;
    for (let i=0 ;i<100;i++){
        a++;
    }
    console.log(a);
}

setTimeout(loops,1000);

console.log("helo");

//callback function : calling function from another function
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumofsomething(a,b,fn){
    const vara = fn(a)
    const varb = fn(b)
    return vara + varb;
}

const ans = sumofsomething(2,3,cube);
console.log(ans);