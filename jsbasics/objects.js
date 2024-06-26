// there are 2 ways through which we can create object 1) constructor 2)literals , remember constructor se jabh bhi object banta hai woh hamesha "singleton" banta hai , aur Object.create() is contructor method
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                   //imp // to access mysym as a symbol data type in boject we have decalre mysym in [] therefore [mysym],if we didnt decalre , mysym will act like a normal string data type not symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  // kabhi aise bhi access karna padta hai jabh object declaration kai waqt aap kuch alag karre 
// console.log(JsUser[mySym])      //***** imp*****   objects kai aandar Symbol ko aise hie access kiya jata hai

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //iske badd koi bhi changes nhi honge JsUser is object kai aandar
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());