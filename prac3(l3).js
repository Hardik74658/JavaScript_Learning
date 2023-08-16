// const getStudentData = () =>{
//     console.log("All students Data")
// }
// const getEmployeeData= () =>{
//     console.log("All Employees Data")
// }
// const getData= (condition,cb) =>{
//     cb();
// }

// var condition1 = "employee"

// if(condition1 == "student"){
//     getData("stuent",getStudentData)
// }
// else{
//     getData("employee",getEmployeeData)
// }

// const sum = (a,b) =>{
//     return a+b;
// }
// const sub = (a,b)=>{
//     return a-b;
// }
// const operation = (cb,a,b) =>{
//     return cb(a,b)
// }
// var a=10
// var b=22
// operator = "sum"
// if(operator == "sum")
// {
//     operation(sum,a,b)
// }
// if(operator == "sub")
// {
//     operation(sub,a,b)
// }







// STRING PROPERTIES(METHODS)

// Strings are immuatable

// length      -- gives length
// split       -- splits according to parameter and gives array (gives array of words when paramater is space)
// trim        -- remove spaces that are in beginning and end in strings useful for checking mobile no email etc 
// endswith    -- checks wheather string ends with the given string parameter or not return type boolean
// startswith  -- checks wheather string starts with the given string parameter or not return type boolean
// toUppercase -- returns string with uppercase
// toLOwercase -- returns string with lowercase
// concat      -- joint strings 
// indexof     -- returns index of first occurrence of given string parameter
// lastindexof -- returns index of last occurrence of given string parameter
// includes    -- gives true or false accordingly given string parameter is in string or not !!!!!!! check this
// charAt      -- gives character at given index n parameter 
// substr      -- gives string between given indexes argument(parameter) first argument can not be undefined 
// trimend     -- remove spaces from end of string 
// trimstart   -- remove spaces from start of string 
// replace     -- replace give first argument string with second argument string if first argument string found in original(input)string 
// repeate     -- repeate original string given number of times in argument and make one string from that 
// search      -- search given string in input string and give index number of it 
// slice       -- give part of string from first argument to second argument indexes and second argument excluded 
// match       -- will be teached while regx 


// var toUpper_art = (input_str) => {
//     for(let i=0; i< input_str.length; i++)
//     {
//         input_str.charCodeAt(i) = input_str.charCodeAt(i) - 32
//     }
//     console.log(input_str)
// }
var str1 = "lower"
// toUpper_art(str1)
str1.charCodeAt(0) = str1.charCodeAt(0) - 32
console.log(str1)