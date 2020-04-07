/**
 * JavaScript gives us a function called console.log() to print our results to the console.
 * Using the console.log() function, write the following excercises to the console.
 * ie: console.log("hello world") will print "hello world" to the console.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

 */

// //////////////////////////////////
// /////////// Arrays ///////////////
// //////////////////////////////////

/**
 * Create an array named fullNameArray. Using fullName, populate fullNameArray with the values of your first middle and last names.
 * @returns {Array} array
 */
 
let fullNameArray = ['andrew', 'b', 'mack']


// var fullNameArray = [firstName, middleName, lastName];
function createFullNameArray() {
  return fullNameArray;
}

/**
 * Access the values of your first, middle and last names from fullNameArray. Store the results in a greeting.
 * ie: var greeting = "hello, my name is @string @string @string ";
 * @param {*} fName
 * @param {*} mName
 * @param {*} lName
 * @returns {String} string
 */
let greeting = 'hello, my name is ' + fullNameArray[0] + fullNameArray[1] + fullNameArray[2]
console.log(greeting);

 function createGreeting(fName, mName, lName) {
  return greeting;
}


/**
 * @description
 *  * Create an array of your five top favorite takeout foods.
 *
 * @returns {Array} array
 */
let takeOutFoods = ['pizza', 'indian', 'mexican', 'thai', 'southern'];

function topFiveTakeOutFoods() {
  return takeoutFoods;
}


/**
 * @description
 *  * Remove the first item from the takeout array. Store the result in a variable.
 *
 * @return {String} string
 */

function removeFirstItem() {}
takeOutFoods.shift()
console.log(takeOutFoods)


/**
 * @description
 * Add a new item to the beginning of the takeout array.
 *
 * @returns {String} string
 */

function addNewItemToBeginning() {}
takeOutFoods.unshift('french');
console.log(takeOutFoods)



/**
 * @description
 * Remove an item from then end of the takeout array. Store the result in a variable.
 *
 * @returns {String} string
 */

function removeItemFromEnd() {}
takeOutFoods.pop();
console.log(takeOutFoods)



/**
 * @description
 * Add a new item to the end of the takeout array.
 *
 * @returns {String} string
 */

function addItemToEnd() {}
takeOutFoods.push('greek')
console.log(takeOutFoods)



/**
 * @description
 * Return a copy of index items 2 through 4. Store the results in a variable.
 *
 * @returns {Array} array
 */

function createSubArray() {}
let favoriteFoods = takeOutFoods[1] + ' ' + takeOutFoods[2] + ' ' + takeOutFoods[3];
console.log(favoriteFoods)
 


/**
 * @description
 * Create and empty array. Copy the last three items from the takeout array into the new array.
 *
 * @returns {Array} array
 */

function createNewArray() {}
let newArray = []
newArray = [takeOutFoods[2], takeOutFoods[3], takeOutFoods[4]]
console.log(newArray)



/**
 * @description
 * Create a comma-delimited String using the takout array.
 *
 * @returns {String} string
 */
function createCommaDelimitedString() {}
console.log(takeOutFoods.join(','))


/**
 * @do
 * include this file in a new commit and push
 */

