// is how to note in JS

// const let var
let sentence, number_of_eggs

sentence = 'hi mom' // able to use notes on the same line

number_of_eggs = 3

// sentence = 'hi dad'

let total_groceries = number_of_eggs
console.log(sentence)
console.log(total_groceries)



12312313123 // this is a number

'hello world' // string of characters 

undefined // absence of a value due to it not being assigned yet  

null // absence of value, different than undefined

//boolean = true/false
true & false // these are booleans

{} // an object/dictionary
let couple = {
    justin: 'incredibly handsome', // must be separated with comma
    Katherine: 'isn\'t dumb', // can use \ to keep JS happy, can also use the opposite, for example " instead of '
    number_of_eggs: 3
} // object/dictionary


let is_true = true // statement doesn't make sense but is used to show that you can assign any data type value to a variable 


function firstFunction(value, secondValue) {
    // multiplies two numbers
    console.log(value * secondValue) // * multiply , + add , / divide , % modulus/remainder , - subtract
}

let multiplyTwoNumbers = firstFunction

multiplyTwoNumbers(3, 5)
multiplyTwoNumbers(8, 10)
multiplyTwoNumbers(12, 1)

function secondFunction(value, secondValue) {
    //checks if true or false
    console.log(value == secondValue) // == boolean output, checks if equivalent,  === checks data type, != boolean output, checks if it is NOT equivalent
}

let isTrue = secondFunction

isTrue(2, 3)
isTrue(1, 1)
isTrue(0, 9)

// && AND, || OR, ! NOT  (0 is a false value)

let condition1 = true
let condition2 = false 

console.log(condition1, condition2)

//typeof defines what something is, function, array, object, etc.. 
console.log(typeof isTrue)

//if will read if statement is true
if (condition2) {
    console.log('hi mom')
} else if (condition1 || condition2) {
    console.log('one of the conditions was true')
}
else {
    console.log('value above was clearly false if you\'re reading this LOL')
}
//else will read if first statement was false

let example_array = [1, 2, 3, 4] // comma then space it out, JS uses a 0 indexing system not a 1

let i = 0 
let = length = example_array.length
console.log(length)

//executes the code if value is true, < less than, > greater than, = equal to, <= less than or equal to, >= greater than or equal to
while ( i < length) {
    console.log('value was true: ', i, example_array[i])
    i++ // i++ increment by 1 every time, i-- decrease by one every time
}