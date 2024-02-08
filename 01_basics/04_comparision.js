/*
console.log(2>1);
//console.log(2=!1); syntax error
//console.log(2!=1);   wrong syntax=error
console.log(2>>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
*/

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

// Here, equality check == and comparision < > >= <= works differently. 
//In comparision the null is converted into a number and is treated as 0.
//while in equality check the null is considered as null and not a number.

console.log(undefined == 0); //false
console.log(undefined >=0); //false
console.log(undefined >0);  //false
console.log(undefined <0);  //false


console.log("2"==2); // True: bcoz it doesnot check datatypes
console.log("2"===2); //false. Strict check. it also checks its datatypes
