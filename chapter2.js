//Lexical Structure
 
//Comments
//This is a single line comment;
/* Comment */


//Literals
12 //The number twelve
1.2 //The number 1.2
'Hello World!' //A string of characters
null //Absence of an object

const π = 3.14
console.log(π);

//Unique Escape Sequences
let café = 1; // Define a variable using a Unicode character 
caf\u00e9     // => 1; access the variable using an escape sequence 
caf\u{E9}     // => 1; another form of the same escape sequence

console.log("\u{1F600}");

//OPTIONAL SEMICOLONS
//JavaScript uses the semicolon (;) to separate statements from one another

// Since the two statements appear on separate lines, the first semicolon could be omitted:
a = 45
b = 56;


//Written as follows, however, the first semicolon is required:
a = 45; b = 56;

let a
a 
=
34
console.log(a);
//JavaScript interprets the code like this
//let  a; a = 34; console.log(a)

//let y = x + f 
//(a+b).toString()

//But the parentheses on the second line of code can be interpreted as a function invocation of 
//f from the first line, and JavaScript interprets the code like this:
//let y = x + f(a+b).toString(); 

//In general, if a statement begins with (, [, /, +, or -, 
//there is a chance that it could be interpreted as a continuation of the statement before.

//If a line break appears after any of these words (before any other tokens), JavaScript will always interpret that line break as a semicolon. For example, if you write:

return
true;

//JavaScript wiil read it as:
return; true;

//Howeve you probably meant:
return true;