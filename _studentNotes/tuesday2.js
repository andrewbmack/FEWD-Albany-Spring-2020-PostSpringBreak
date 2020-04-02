// functions
// blocks of reusable code
// functions always return a value

function singASong() {
    
    console.log('Staying Alive')
}

singASong();

function splitString(str) {
    console.log(str.split(''));
    return str.split('');
}

function add () {
    console.log(1 + 4)  
}

function sub (a,b) {
    return a - b 
}

// objects
// data structure

const person = {
    fName: "Nancy",
    lName: "Smith",
    hobbies: ['singing', 'running'],
    fullName: this.fName + this.lName,
    greeting: function () {
        return "hello my name is " + this.fName + " and i enjoy " + this.hobbies[0] + " and " + this.hobbies[1]
    }
}
// this. "use the variable defined in 'this' object"



console.log(person.fName)
console.log(person.lName)
