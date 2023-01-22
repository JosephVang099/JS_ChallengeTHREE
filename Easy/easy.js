// A local gym wants to implement an "exercise of the day" program where there is a free class that day that promotes a certain exercise. The gym needs some backend logic that will update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//Note: you should only write one function that can dynamically print the value of the exercise for that day, and it must be a closure


function exercise(type) {
    function exercise2(type){
        return "Today's Excerise: " + type;
    }  
    return exercise2(type);
}
exercise("testType") 


// function exercise(type) {
//     return "Today's Excerise:" + type;
// }


// Output: Today's exercise: Running
 console.log(exercise("Running"));


//Output: Today's exercise: Swimming
console.log(exercise("Swimming"));


//Output: Today's exercise: Dancing
 console.log(exercise("Dancing"));


// //Output: Today's exercise: Fencing
 console.log(exercise("Fencing") );