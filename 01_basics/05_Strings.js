const name = "pranav";
const repoCount ="2";

// console.log(name + " " + repoCount + "value"); Poor way of writing code

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); // this is a better way to write code

// it is called string interpolation and we use backticks (``) for it and we use placeholder ${} to inject
//    varibales, funcitons and arithmatic operations.

const instaName= new String("Pranav"); //new keyword se hum object use karte hain aur String ke constructor me value pass krte hain.

console.log(instaName[0]);  // key value pairs hain to 0 key pe value hai p
console.log(instaName.toUpperCase()); // function use kiya toUpperCase. function ke aage () lagaye

console.log(instaName.charAt(2));  //pass index value to detect character at that value with charAt() function 

console.log(instaName.indexOf("a"));  // pass character to find the index value with indexOf() funciton

const newString = instaName.substring(0,4); // 0 to 3 characs aa rhe hain. last value 4 jo dali h wo include nai ho rhi h
console.log(newString);

const anotherString= instaName.slice(-5,6); //  slice() me negative value bhi de sakte hain to wo reverse count krega 
console.log(anotherString);

const newStringOne = "     pranav    ";
console.log(newStringOne);
console.log(newStringOne.trim());  // trim() removes whitespace from both ends (refer mdn doc also)

const url="https://pranav.com/pranav%20tiwari";
console.log(url.replace("%20", "-"));  // replace() replace kr dega un strings ko jiss ap krwana chahte h. 

console.log(url.includes("pr"));  // include() se hum puch sakte hai ki ye value string me h ya nai. uska ans true ya flase me ayega

const newName = new String('pranav-tiwari-male-ujjain');
console.log(newName.split("-"));  // split basis on dash (-). outcome comes in array


//learn string methods from mds doc and google chrome console