// Event Bubbling

Parent  Div
document.querySelector("div")
.addEventListener("click",()=>{
    console.log("Clicked 1");
})

// Child Element of Div
document.querySelector("button")
.addEventListener("click",()=>{
    console.log("Clicked 2");
})

// First it will print Clicked 2 and then Clicked 1 because the event will propagate from child to parent 

// Event Capturing 

document.querySelector("div")
.addEventListener("click",()=>{
    console.log("Clicked 1");
}, true)

document.querySelector("button")
.addEventListener("click",()=>{
    console.log("Clicked 2");
},true)


//  First it will print Clicked 1 and then Clicked 2 because the event will propagate from parent to child 


function mixIngredients() {
    return new Promise((resolve) => {
        console.log("Mixing ingredients...");
        setTimeout(() => resolve("Ingredients mixed"), 1000);
    });
}

function bakeCake() {
    return new Promise((resolve) => {
        console.log("Baking the cake...");
        setTimeout(() => resolve("Cake baked"), 2000);
    });
}

function applyFrosting() {
    return new Promise((resolve) => {
        console.log("Applying frosting...");
        setTimeout(() => resolve("Cake frosted"), 1000);
    });
}

// Chaining the promises


mixIngredients()
    .then(result => {
        console.log(result);
        return bakeCake();
    })
    .then(result => {
        console.log(result);
        return applyFrosting();
    })
    .then(result => {
        console.log(result);
        console.log("Cake is ready!");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });



// ********************************* Debouncing ******************************** //

const debounce = (fun , delay)=>{
    let timer ;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fun(...args)
        },delay)
    }
}

const handleChange = debounce((event)=>{
   console.log(event.target.value);
   console.log("Changed");
}, 700)



document.getElementById("input").addEventListener("input", handleChange)


// Event Delegation

document.querySelector("ul").addEventListener("click", function(event){

    if (event.target.tagName === 'LI') {
        console.log('Item clicked:', event.target.textContent);
    }
})


// Curring 

// Without Currying

const add = (a,b)=>{
    return a + b
}

// console.log((add(3,5)));

// With Currying

const curridAdd = (a) =>{
    return function (b){
        return a + b
    }
}

// console.log(curridAdd(2)(3));

//  Another Example of currying

let obj = {
    name : "Nabil",
    age : 20
}

function userInfo (obj){
    return function (userInfo){
        return obj[userInfo]
    }
}

const res = userInfo(obj)
// console.log(res("name"));
// console.log(res("age"));


// Colsure and Lexical Scope 

function sum (a){
    let c = 45;
    return function (b){
        return a + b + c
    }
}

const result = sum(2)
// console.log(result(5));




// Prototypel Inheritance

let name = "NK"

let object1 ={
    name : "Nabil",
    city : "Anand",
    getDetails  : function(){
        console.log(`${this.name} ${this.city}`);
    }
}

let object2 = {
    name : "NK"
}

object2.__proto__ = object1



const arr1 = ["Nabil"]
const str1 = "Nabil"

// console.log(arr1 == str1);


//  ======== By Default the "" is false and [] is true 1 is true and 0 is false

// console.log(false == !"");
// console.log(false == ![]);


// Call Bind Apply

this.firstName = "NK";
this.lastName = "Pathan";



let person1 = {
    firstName : "Nabil",
    lastName : "Pathan"
}

let printFullName = function (city , state){
    console.log(this.firstName+" "+this.lastName+" "+city+" "+state);
}


// Call method used to point to the specific object passed in the
// First Parameter and other arguments are passed seperated by comma
printFullName.call(person1,"Anand","Gujarat")

// Similar to call method but the Arguments are passed as a List
printFullName.apply(person1,["Anand","Gujarat"])


// Returns a New Function 
let printName = printFullName.bind(person1,"Anand", "Gujarat")
printName()


// Throttling 

function throttle (fun , delay){
    let isThrolled = false
    return function (...args){
        if(isThrolled) return
        document.querySelector("button").disabled=true
        isThrolled = true
         setTimeout(()=>{
            fun(...args)
            document.querySelector("button").disabled = false; 
            isThrottled = false; 
        },delay)
    }
}


const handleThrottle = throttle(()=>{
    console.log('Clicked');
}, 4000)

const btn = document.querySelector("button")
btn.disabled= false
btn.addEventListener("click", handleThrottle)



// Map , filter , Reduce 


const arr = [1,2,3,4,5]


// Map Returns a New Array in the Output
const sumArr = arr.map((num,index)=>{
    return num * 2
})

// console.log(sumArr);


// Filter Also returns a new Array with the elements matching the given crieteria
const evenElements = arr.filter((num,index)=>{
    return num % 2 == 0
})
// console.log(evenElements);


// Reduce Function Takes first two values and perform some operation inside callback and then one by one performs the operation on other elememts 

const sumOfElements = arr.reduce((n1,n2)=>{
    return n1 + n2
})

// console.log(sumOfElements);


const products = [{ name: "Laptop", price: 150 }, { name: "Mouse", price: 25 }, { name: "Keyboard", price: 75 }]

const filteredProducts = products.filter((product)=>{
    return product.price <= 100;
})

// console.log(filteredProducts);

// const users = [{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Smith" }]

function printFullName (users){
    return users.map((user)=> `${user.firstName} ${user.lastName}`)
}

// console.log(printFullName([{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Smith" }]));


const fruits =  ["apple", "banana", "apple", "orange", "banana", "apple"]

// Count Occurrence of Each Element

// Using Reduce
const countMap = fruits.reduce((acc,ele)=>{
     acc[ele] = acc[ele] ? acc[ele] + 1 : 1;
     return acc    
 },{})


//  Using Map 

const resultMap = {}

fruits.map((fruit)=>{
    if(resultMap[fruit]){
        resultMap[fruit] = resultMap[fruit] + 1 
    }
    else{
        resultMap[fruit] = 1
    }
})
// console.log(resultMap);


// The Empty Object passed is the initial value of the accumulater and  in this case our accumulator is an object so we pass an empty object 

// console.log(countMap);

const numbers = [2 , 3 , 4 , 5 , 6 , 8]

const sum = numbers.reduce((acc,ele)=>{
    // console.log("Acc : ", acc);
    return acc + ele
})

// console.log(sum);

const objects = [{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]

// converting it into single object  { a: 1, b: 2, c: 3 }

// Using Map
// const result = {}


// objects.map((obj)=>{
//     result[obj.key] = obj.value
// })

// console.log(result);


// Using reduce

const result = objects.reduce((acc,ele)=>{
    acc[ele.key] = ele.value
    return acc
},{})

// console.log(result);


// [[1, 2], [3, 4], [5, 6]] convert to single array  [1, 2, 3, 4, 5, 6]


const multiarr = [[1, 2], [3, 4], [5, 6]]

const resultArray = multiarr.reduce((acc, ele)=>{
    return acc.concat(ele)
},[])

// console.log(resultArray);

const findLargest = (arr) => arr.reduce((acc, ele) => acc > ele ? acc : ele);

// Example usage
// const input = [3, 5, 7, 2, 8];
// const output = findLargest(input);



// Input: [{ value: 1 }, { value: 2 }, { value: 3 }]
// Output: [{ value: 2 }, { value: 4 }, { value: 6 }]

const input =  [{ value: 1 }, { value: 2 }, { value: 3 }]

const output = input.map((ele)=> {
    return {
        ...ele,
        value : ele.value * 2
    }
})

// console.log(output);

var x = 20

function foo(){
    console.log(x);
    var x = 10
}

// foo()



async function func1() {
    return  'Hello world';
}
 // Async function always returns a Promise 

// const reslut = func1().then((res)=> console.log(res)).catch((err)=> console.log(err)
// )



let a = { name : "Nabil"}
let b = {...a}
a.name = "NK";
console.log(b.name);

console.log(name);
var name = 'nabil'

function outer(){
    function inner(){
        console.log(x);
    }
    const x = 5
    return inner
}

const inner = outer()
inner()


// Original object

const original = {
    name: "Alice",
    address: {
        city: "Wonderland",
        street: "Rabbit Hole"
    }
};

// Shallow copy using Object.assign or spread operator
const shallowCopy = { ...original };
// const shallowCopy = Object.assign({}, original);

// Modifying the nested object in the shallow copy
original.address.city = "Dreamland";

console.log(original.address.city); // Output: "Dreamland"
console.log(shallowCopy.address.city); // Output: "Dreamland"



// console.log([1,2]== [1,2]);

// Give fasle because the arrays and objects are compared by the reference by the reference not the value 

const arr1 = ["Nabil"]
const str1 = "Nabil"

// console.log(arr1 == str1);

const person1 = {
    name : "Nabil",
    city : "Anand"
}

const person2 = person1

person2.name = "NK"
person2.city = "Borsad"

// console.log(person1);
// console.log(person2);

// In JavaScript, when you assign one object to another, you are copying the reference to the object, not the actual object itself. This means both variables point to the same object in memory.


const numbers1 = [0 , 1 ,2 , 3 , 4 , 5]

const newAns =  numbers1.filter((num)=>{
    return num < 3
}).map((num)=> num + 5)

// console.log(newAns);

const str2 = "hey i my name is nabil"

const strresult = str2.split(" ").map((str)=>{
    return str.charAt(0).toLocaleUpperCase() + str.slice(1)
})

// console.log(strresult);



































