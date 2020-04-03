//  print each number from 1 - 100
//  if the number is divisible by 5 print "fizz"
//  if the number is divisible by 3 print "buzz"
//  if the number is divisible by both print "fizzbuzz"


for (var i = 0; i < 100; i ++) {
    if (i % 3 ===0 && i % 5 ===0) {
        console.log(i + ': FizzBuzz')
    } else if (i % 3 === 0) {
        console.log(i + ': Fizz')
    } else if (i % 5 === 0) {
        console.log(i + ': Buzz')
    } 


}
