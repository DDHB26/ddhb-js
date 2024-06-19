// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);         // for > >= < <= null is converted to a number(0) but for equality check == it is not converted to a number
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);   //false for all
console.log(undefined > 0);
console.log(undefined < 0);

// === triple  check

console.log("2" === 2);       // if it would have "2"==2 o/p =true because 2 string is converted in number
                              // but in triple check with the number the datatype is checked as well and hence string is not equal to int o/p is false