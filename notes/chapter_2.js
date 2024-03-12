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

// {} // an object/dictionary
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
    // checks if true or false
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

// same parts as the "while" loop but instead it's written all neatly in one syntax, can also have slightly different functionlities depending on what ypu're trying to do
// traditionally used for going over one index after another for a definitive length, extremely common
 for(let j = 0; j < length; j++) {
    if (j % 2 === 0) {
        continue // will skip and not console this value, will only print odd indexes
         // break // if condition is met then end the loop early (in this case it will end at 2). 
     }
     console.log('value was true: ', j, example_array[j])
 }

function addStrings(string1 = 'default1', string2 = 'default2'){ // will assume the input of strings if given no value "hello default2"

     if (!string1 || !string2) { 
        console.log('you are missing an input') // if missing one of the strings console will run stating that we are missing an input
        return
     }

    let concatString = string1 + ' ' + string2 // allows a spacing between string1 and string2
    console.log(concatString)
    return concatString // will return an output (like returning a product to a store)
}

let newString = addStrings('hello')
console.log('The new string is: ', newString) // a way to add strings to a sentence