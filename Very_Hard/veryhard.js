// Object prototype chain and prototypal inheritance exercise.

// 1. Create a Person constructor that has three properties: name, job, and age.

// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.

// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.

// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.

class person1 { 
    constructor(name, job, age) { // created person constructor with three properties (#1)
    this.name = name; // “this” keyword refers to an object that is executing the current piece of code. 
    this.job = job;
    this.age = age;
    this.exercise = function () { // exercise method --> console.log (#2)
    console.log("Running is fun! - said no one ever")
    }
    this.fetchJob = function () {
    console.log(this.name + ' is a ' + this.job)
    } //fetchJob method --> console.log (#3)
    }
    }


class programmer1 {
    constructor(name, job, age, languages, busy = true) // (#4)

    completeTask(){ // (#5)
        return this.busy=false;
    }
    acceptNewTask(){
        if(this.busy){
            return false
        }else{
            return true
        }
    }
    offerNewtask(){ // (#6)
        if (this.busy == true){
            console.log(this.name + ' cannot accept any new task right now.');
        }
        else {
            console.log(this.name + 'would love to take on a new responsibility')
        }
    }
    learnLanguage(language) { // (#7)
        this.languages.push(language);
    }
    listLanguages() {
        console.log(this.name + ' knows: ' + this.language);
}
}





    


   const person1 = new person('Brad', 'back-end developer', 23, ['Html', 'Css', 'Javascript', 'French', 'English']);

    const programmer1 = new programmer('Robert', 'front-end developer', 22, ['Css', 'Javascript', 'Html', 'React'], false);
    person1.offerNewtask(); // busy
    programmer1.offerNewtask(); // not busy

    person1.completeTask();
    programmer1.completeTask();

    person1.offerNewtask(); // show now accept a task
    programmer1.offerNewtask(); // should be no change because they were already not busy

    person1.listLanguages(); // should have no languages
    programmer1.listLanguages(); // should have languages

    person1.learnLanguage("Spanish", "French", "German");
    person1.listLanguages();
    programmer1.listLanguages();