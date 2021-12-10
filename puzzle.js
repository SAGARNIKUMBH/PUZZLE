console.log("Puzzle Solution");
// Q.1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum ?
// function triplesum(x, y) {
//   if (x == y) {
//     return x + y;
//   } else {
//     return x + y;
//   }
// }
// console.log(triplesum(10, 20));
// console.log(triplesum(30, 10));

// Q.2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19 ?
// function diff_num(n) {
//   if (n < 19) {
//     return 19 - n;
//   } else {
//     return n - 19;
//   }
// }
// console.log(diff_num(10));
// console.log(diff_num(15));
// console.log(diff_num(9));

// Q.3. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50 ?
// function two_no(x, y) {
//   return x == 50 || y == 50 || x + y == 50;
// }
// console.log(two_no(50, 50));
// console.log(two_no(20, 50));
// console.log(two_no(20, 20));
// console.log(two_no(20, 30));

// Q.4.Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.??
// Ans.
function division_string(n1, n2) {
  
    n1 = 80;
    n2 = 6;
    
    var div = Math.round(n1 / n2).toString(),
    result_array = div.split("");
    
    if (div >= 1000)
    {
    for (var i = div.length - 3; i > 0; i -= 3) 
    {
    result_array.splice(i, 0, ",");
    }
    result_array;
    }
    