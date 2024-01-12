//Touring JavaScript - 1.3
x = 34;

//Objects
//An object is a collection of name/value pairs
let book = {
    topic: "Hatake Kakashi",
    edition: 4
}

//To access propeties of the objects - 2 different ways
//console.log(book.topic); //dot
//console.log(book["edition"]); //bracket

//Adding new propeties
book.author = "Yuzo";
book.pages = {}
//console.log(book)

//Conditionally accessing propeties with ?
//console.log(book.topic?.cha2?.me); book.topic has no cha2 property

//Arrays
let numbers = [2,4,3,55,67, 20202, 33];
//console.log(numbers[0])
//console.log(numbers.length) //the first element in the numbers array
//console.log(numbers[numbers.length-1]); //last element of the array
numbers[7] = 45; //adding to the array
numbers[2] = 100; //changing an element in the array
//console.log(numbers);


//Arrays and objects can hold other arrays and objects
let points = [
    {name: "Neymar", team: 'Al Hilal'}, // an array with 2 elements. each element is an object
    {name: "Greenwood", team: "Getafe"}
]

let leagues = {
    epl: [[1, 2], [3, 4]],
    laliga: [[2,4], [2,44]]
};

//Operators
let y = 8, t = 45;
console.log(y === t)
console.log("two" === "three")
console.log("first" < "Ava");
console.log(false == (y > t)); // because false is equal to false

//Functions 
function him(e) {
    return 3 + e;
}

console.log(him(45));

let me = function(n) {
    return 4 * n;
};

console.log(me(him(5)));

//When we use functions with objects we get methods
let a = [];
a.push(1,2,3);
//console.log(a.reverse());

function abs(x) {
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log(abs(-10)===abs(10));

function sum(array) {
    let sum = 0;
    for(let x of array) {
        sum += x;
    }
    return sum;
}

let r = sum([1,2,3,4,5]);
console.log(r)

//factorial
function factorial(n) {
    let product = 1;
    while(n > 1) {
        product *= n;
        n--;
    }
    return product;
}

console.log(factorial(9));


//Object Oriented Programming
class Point {
    constructor (x, y){ 
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x + this.y + this.y
        );
    }
}

let p = new Point(1, 1);
console.log(p.distance())

