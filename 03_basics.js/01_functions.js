
function sayMyName() {
    console.log("R")
    console.log("O")
    console.log("H")
    console.log("A")
    console.log("N")
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1+number2
    // return result
    // console.log("rohan");

    return number1 + number2
}

const result = addTwoNumber(3, 4)

// console.log("Result: ",result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rohan"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){  // ...num1 is rest operator
    return num1                                  // called rest opr in function
}                                                // else called spread opr

// console.log(calculateCartPrice(200,300,500,2000))

const user = {
    username: "rohan",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,1000]));
