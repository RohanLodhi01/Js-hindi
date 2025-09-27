// var c = 300
let a = 300
if (true) {
    let a = 30
    const b = 20
    // console.log("INNER: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "rohan"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "rohan"

    if(username === "rohan"){
       const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addOne(5));
function addOne(num){
    return num + 1
}


console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}
