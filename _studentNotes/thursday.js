// for (var i = 0; i < 10; i ++) {
//     if (i % 2 === 0) {
//         console.log(i + ": is even")
//     } else console.log(i + ": is odd")
// }


// Objects, anything that has a function related to it

// 'string'.length
// [1,2,4].slice(0,1)

const person = {
    // key: value
    name: 'John Smith',
    phone: '5551234567',
    address: {
        city: 'Albany',
        state: 'NY',
        zipcode: '12210'
    },
    hobbies: ['biking', 'running'],
    walk: function () {
        return this.name + ' walks'
    }
}

console.log(person.name)
console.log(person.phone)
console.log(person.address.city)
console.log(person.walk())


// Global Objects

let today = new Date();

console.log(today.getHours())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())


let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()
console.log(minutes)

let am = 'AM'
if (hours > 12) {
    hours = hours - 12
    am = 'PM'
}

if (hours < 10) {
    hours = '0' + hours
} 
if (minutes < 10) {
    minutes = '0' + minutes
}
if (seconds < 10) {
    seconds = '0' + seconds
}
// previous can be converted to the following...
// seconds ? seconds = '0'+ seconds : seconds



let time = hours + ':' + minutes + ':' + am 

// let clock = document.getElementById('clock');

// setTimeout(time(), 1000);

// generates a number between 0 and 1
console.log(Math.random())

// rounds the number up
console.log(Math.floor(13.7))

// rounds the number down
console.log(Math.ceil(13.2))

// 
console.log(Math.round(12.5))

function numberGame (num) {
    if (num < 10) {
        return 'number is less than ten'
    } else if (num > 10) {
        return 'number is greater than 10'
    }
}

console.log(numberGame(6))


