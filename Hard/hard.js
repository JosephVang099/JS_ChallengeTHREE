// Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.


/* First Try */
// function pii(){
//     let patient2 = {
//         names: 'John',
//         ssn: '123-45-6789'
//     return{
//         getName: function (){
//             return 'Mary'
//         }
//     },
//     return{
//         getSSN: function (){
//             return '123-45-6789'
//         }
//     }
//     }
    
// };


/* This works but it doesn't have the pii object */
// let patient2 = {
//     _names: 'John',
//     _ssn: '123-45-6789',
//     getName(){
//         return "Mary"
//     },
//     getSSN(){
//         return "123-45-6789"
//     }
// };

/* Resource: 
https://www.thoughtco.com/and-in-javascript-2037515#:~:text=The%20dollar%20sign%20(%24)%20and,properties%2C%20events%2C%20and%20objects.

https://www.includehelp.com/code-snippets/return-object-from-function-in-javascript.aspx 
*/

function pii(n, num) {
	var name = n; //names won't work
	var ssn = num;
   

	return {
		_names: name, // changed the first name to names and it shows up as "John"
        // adding _ makes it undefined, not #... If you use #, you must create a class
		_ssn: num,
        getName(){
            return "John"
        },
        getSSN(){
            return "123-45-6789"
        }
	}


};

var patient2 = pii('John', 123456789);

// Output: Undefined

console.log(patient2.names);


// Output: Undefined

console.log(patient2.ssn);


// Output: John

console.log(patient2.getName());


// Output: 123-45-6789

console.log(patient2.getSSN());

// let pii = function patient2(type) {
//         function patient(type){
//             function names (type){
//                 return _John
//             }
//             function ssn (type){
//                 return _23123321
//             }
//             function getName(type){
//                 return "Mary"
//             }
//             function getSSN(type){
//                 return "123-45-6789"
//             }
//         }  
    
//     }
// ;