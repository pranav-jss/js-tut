/* //  Two categories of datatypes: Primitive and Non- Primitive(Reference type)

//Primitive datatypes (call by value types) (Primitve datatypes have 7 types :)
1. String : has characters (alphabets, numerals, symbols)
2. Numbers : contains numerical values
3. BigInt : contains huge number value. used for scientific values where there are very big numbers
4. Undefined : data is not defined but variable is assigned
5. null : has standalone value / Empty value (for ex: yadi temp app se current temp fetch karna hai aur 
    temp app me error ya server error ke karan value 0 aati hai to temp 0 nahi hua That means the return value 
    should be null/empty)
6. boolean: true or false
7. symbol: to make any component unique. Majorly usedin React js

//Non-primitive datatypes or Reference type :
1. array
2. object (to master javascript one can learn all concepts of objects and browser web events)
3. funcitons

Q. is javascript static typed or dynamically typed language?
A. Javascript is dynamically typed language which means datatypes of variables are determinded by the
    values assigned to them or the values they hold at runtime. And the values can be changed during
    throughout the program.

    */

    //array ex:

    /*   const heros ["hulk", "loki", "thor" ];   */

    //object ex:

      let myObj={
        name ="pranav",
        age="32",
            }  

    // function ex:

    const myFunction = function () {

        console.log("hello world");

    }


    // to determine the datatype we use typeof function :

    console.log(BigInt);

    console.log(typeof myFunction);
    console.log(typeof myObj);
    

    //determine the typeof of all the datatypes or else refer ecma script documentation 



    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Memory has two types:
    1. Stack Memory (Primitive datapyes me har jagah stack memory use hoti hai): jab bhi stack 
        memory use hoti hai iska matlab jo bhi apne variable declare kara hai uska apko copy milta hai
    
    2. Heap memory (Non-primitve me har jagah heap memory use hoti hai): jab bhi heap memory allocate
        hoti hai to apko reference milta hai original value ka. to jo bhi changeshonge wo sidha original
        value me hota hai