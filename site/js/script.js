////////////////////////////////////////////////////////////////////////////////
// JavaScript is a dynamically typed language
// There is a type associated with a variable - Can I find ut what the 
// variable type is
// Scopes
// There is a global scope and is the outer most type scopr
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// JavaScrit has two types of Scopes
// GlobalScope
// LexicalScope is defined as the scope within a function bocy
// -- Does not have the concept of block scope
// ExecutionContext
// -- Everything is executed in an execution context
// Question : What is the Global Execution Context
// -- Function invocation creates a new execution context
// -- An execution context 
//    -- Variable Environment
//       -- Contains the defintions of the symbols that were declared in 
//          its scope - variables and functions
//       -- A special "this" object (Similar to gcb/gcs in Simulink??)
//       -- Reference to the outer environment
////////////////////////////////////////////////////////////////////////////////
console.log(this);

////////////////////////////////////////////////////////////////////////////////
// a
// 
// a is a global variable whose value is the function definition. Infact a of an
// object type
////////////////////////////////////////////////////////////////////////////////
function a () {
	console.log("Hello World from a defined function!!");
}
a.next = 2;
////////////////////////////////////////////////////////////////////////////////
// b
// 
/// b is a global variable whose value is the function definition. This is the 
/// point where b is being defined and ceases to be "not defined". 
////////////////////////////////////////////////////////////////////////////////
var b = function () {
	console.log("Hello World defined anonymously and set to a variable!!");
}
a();
b();
console.log(a);
////////////////////////////////////////////////////////////////////////////////
// c
//
/// Declaring var c defaults is to a type called undefined. Undefined is a 
/// primitive in JavaScript
///
/// There 6 Primitive Types
/// 1. Boolean true/false
/// 2. Undefined
/// 3. Number (double precision 64 bit notaion)
/// 4. Null
/// 5. String (Can use single or double quotes)
/// 6. Symbol ES6
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// List of things that can be coerced to false in java
//
/// false : boolean
/// null : null type
/// undefined : undefined type
/// "" (Empty string) : String type
/// NaN (Not a number) : number
/// 0 (The number 0) : number
///
/// typeof gives the type of a value/variable
/// Boolean, Number, String are conversion utilities
////////////////////////////////////////////////////////////////////////////////
var c = NaN;
console.log(c);
if (c) {
	console.log("NaN is True")
} else {
	console.log("NaN is false")
}

console.log("Type of C is " + (typeof c))

var d = {
	a : "a",
	b : "b",
	c : "c",
    d : "d"
};
for(fields in d.a) {
	console.log(fields);
}

console.log(d["a"]);
////////////////////////////////////////////////////////////////////////////////
// Default Arguments in Java
//
/// Style 1
/// if (arg1 === undefined) {
///	   arg1 = "SOme Defined Value"
/// }
/// Style 2
/// sideDish = sideDish || "whatever"
/// this is not great because what if we wanted sideDish to be false
/// Default parameters are truly supported in ES6
////////////////////////////////////////////////////////////////////////////////


