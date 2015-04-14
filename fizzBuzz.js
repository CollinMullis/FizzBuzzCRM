/* Code by Collin Mullis
	Javascript Exercise 
	April 13th 2015
*/
// FizzBuzz, Print #'s 1 - 100
// Print Fizz for #'s divisible by 3
// Print Buzz for #'s divisible by 5
// Print FizzBuzz for #'s divisible by both 3 and 5
for (i = 0; i <= 100;i++) {
	// If # is divisible by 3, print "Fizz"
	if (i % 3 == 0)
		console.log("Fizz")
	// If # is dibisible by 5, print "Buzz"
	else if (i % 5 == 0)
		console.log("Buzz")
	else 
		console.log(i)
}
