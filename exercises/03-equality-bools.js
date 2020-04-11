///////////////////////////////////////////////
////// Equality Operations and Booleans ///////
///////////////////////////////////////////////

// Create a function for each of the following statements
//  for equality

/**
 * x is greater than y
 * @returns {Boolean}
 * 
 * 
    ie: 
    const xGreaterThanY = function (x, y) {
      if (x > y) {  // if this is a true condition
        return x;   // return x
      } else {
        return "x is not greater than y";
      }
    };
};

*/

/**
 * x divided by y is less than or equal to y divided by x
 * @returns {Boolean}
 */
const xDividedbyY = function (x, y) {
  return (x / y) <= (y / x);
};

console.log(18,9)



/**
 * not zero is not equal to zero divided by zero
 * @returns {Boolean}
 */
const zero = function () {
  return !0 !==0 /0
}
console.log(zero())


/**
 * Create a variable named fullName.
 * Set the value of fullName to your full name.
 * Check if x minus y is equal to the length of "length of fullName"
 * @returns {Boolean}
 */
const fullName = 'andrew mack'
const xMinusY = function (x,y) {
  return x-y === "length of fullName".length
}
console.log(xMinusY(3, 10))


/**
 * Create a variable named fullName.
 * Set the value of fullName to your full name.
 * chceck if x is less than or equal than fullName.length
 * @returns {Boolean}
 */
const xFullName = function (x) {
  return x <= "length of fullName".length
}
console.log(xFullName(5))


/**
 * thirteen plus six is not equal to twentythree minus 5
 * @returns {Boolean}
 */

const thirteen = function() {
  return 13 + 6 !== 23 -5;

}
console.log(thirteen())


/**
 * seventyfive or seventyfive and twentyfour times three
 * @returns {Number}
 */
const seventyfive = function() {
  return 75 || (75 && 24 * 3);

}
console.log(seventyfive())



/**
 * "my first name" is not equal to "My first name"
 * @returns {Boolean}
 */
const myFirstName = function() {
  return 'my first name' !== 'My first name';
}
console.log(myFirstName())



/**
 * four plus three and six times eight
 * @returns {Number}
 */
const fourplusthree = function() {
  return (4+3) && (6*8);
};
console.log(fourplusthree())



/**
 * "four" is equal to 4
 * @returns {Boolean}
 */
const four = function() {
  return four === 4;
};
console.log(four())





//  const four = function (4) {
//   return four === 4
// }
// console.log(four(4))