// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "rohan",
    "full name": "rohan lodhi",
    [mySym]: "mykey1",
    age: 20,
    location: "Bhopal",
    email: "rohan@google.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rohan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rohan@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello Js, user");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
