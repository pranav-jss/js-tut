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

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// Here, equality check == and comparision < > >= <= works differently. 
//In comparision the null is converted into a number and is treated as 0.
//while in equality check the null is considered as null and not a number.

console.log(undefined == 0);
console.log(undefined >=0);
console.log(undefined >0);
console.log(undefined <0);


console.log("2"==2);
console.log("2"===2); //strict check. it also checks its datatypes
