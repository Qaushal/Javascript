

const mySym = Symbol("key1")


const JsUser = {
    name: "kaushal",
    "full name": "Kaushal kalariya",
    [mySym]: "mykey1", //to access symbol object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //old way to print object datatpe
// console.log(JsUser["email"]) //new way to print object datatpe
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "kaushalkalariya8@gmail.com"
// Object.freeze(JsUser) //freeze the object and no further improvement is allows
JsUser.email = "kaushal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //to access current object's datatype in function
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kaushal",
            lastname: "Kalariya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //nesting inside nesting

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


const obj3 = {...obj1, ...obj2}
// console.log(obj3);