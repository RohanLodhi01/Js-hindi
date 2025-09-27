// const tinderUser = new Object()   // it's singleton

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "rohan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rohan@google.com",
    fullname: {
        userfullname: {
            firstname: "rohan",
            lastname: "lodhi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1,obj2) // given a target empty braces {} 

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);


// how values come from database, it come in array of objs

const user = [
    {
        id: 1,
        email: "rohan@google.com"
    },
    {
        id: 1,
        email: "rohan@google.com"
    },
    {
        id: 1,
        email: "rohan@google.com"
    }
]


user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

// objects destructure

const course = {
    coursename: "JS in hindi",
    price: 999,
    courseInstructor: "hitesh"
}


// console.log(course.courseInstructor);

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);


// JSON file

//    object type JSON file
// {
//     "name": "rohan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array type JSON file
[
    { },
    { },
    { }

]