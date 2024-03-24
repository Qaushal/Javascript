const user = {
    username: "kaushal",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//passing object externally
// handleObject(user) 

//passing object internally
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//passing Array externally
// console.log(returnSecondValue(myNewArray));

//passing Array internally
console.log(returnSecondValue([200, 400, 500, 1000]));