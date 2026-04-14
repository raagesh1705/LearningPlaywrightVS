//identifiers, literals, operators
//var, let, const

//variable name or identifier - a (name which is given to the container which holds the value)
// 10 -> literal or value - 10, 20, hello, true, false
//= ->operator 
//; - semi colon is optional in JS 
 var a=10; 
 a=20;
 console.log(a);

/**rules for identifiers
 * 1. identifier can start with letter, underscore(_) or dollar sign($)
 * 2. can contain letters,numberes,underscore or dollar sign
 * 3. identifier cannot start with a number
 * 4. identifier cannot contain spaces or special characters other than underscore and dollar sign 
 * 5. identifier cannot be reserved keywords
 * 6. identifier is case sensitive
 **/

// case sensitive example 
var name = "John";
var NAME1="janeme";
console.log(name);
console.log(NAME1);

// variable name cannot be a reserved keyword - creates an error 
//var break = "hello"; // this will cause an error because 'break' is a reserved keyword in JavaScript
//console.log(break);
