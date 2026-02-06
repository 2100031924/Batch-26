
// alert()

//variables

//var --global scope and Dunction scope


//let -- block scope


//const -- block scope

//var

var a = 10  // declaration //initialization

a=15  //reused //re-initialization
var a=20 //re-declaration

console.log("var:-",a);

//let

let b=50 //dec //initialization

b= 55 //reuse //re-initialization
//let b //not accept re dec

console.log("let :-",b);

//const

const c=22
c=23; //not accept re use re initialization and re declaration
console.log("const :-",c);



//printing statements

//console.log()

let a1=10

console.log(a1)

console.log(100)


//alert()

// alert("Hello Welcome")

//confirm()
// confirm("do you like js")




//prompt()

// prompt("what is ur name")


//document.writeln()

// document.writeln("123")

//i want to know username and print the value

// let userName=prompt("what is ur name")
// console.log(userName)

//i want to show pop up "hi" to user side

// alert("hi"+userName)

//Directly i want to access ui side (123)

// document.writeln("123")



//console method


//1. console.log()

// console.log(100)

//2. console.warn()

// console.warn(100)

//3. console.error()

// console.error(100)

//4. console.clear()

// console.clear()



//Data Types

//1. primitive data types

//1.string

// let a2="Hima"
// console.log(typeof(a2))
//2.boolean

// let boo=false
// console.log(typeof(boo))
//3.null

// let bb=prompt()
// console.log(bb)
//4.undefined

// let aa
// console.log(aa)
//5.symbol
//6.bigint
//7.number

// let num=122
// console.log(typeof(num))


//2.non primitive data types

//1.object

//{}

let fruit1={
    name:"apple",
    color:"red",
    price:100,

}
console.log(fruit1)
let fruit2={
    redFruit:["cherry","apple"],
    yellowFruit:["banana","pineapple","mango"],
    remainFruit:["Orange","guava"],
    veg:"tomato"
}
console.log(fruit2.veg)
console.log(fruit2.yellowFruit[1])
console.log(fruit2.redFruit)

//2.array

//[]
let fruit=["apple", "mango","banana","grapes","orange","PineApple"]
console.log(fruit)
console.log(fruit[0])
console.log(fruit[4])

console.log(fruit[fruit.length-1])

console.clear()

//operators

//1.arthemetic operators

//Name                            Operator Symbol                      result
// Addition                            +                                 5+5=10
//Subraction                           -                                 5-5=0
// Multiplication                      *                                 5*5=25
//division                             /                                 5/5=1
//modulus                              %                                 5%5=0
//exponential                          **                                5**5=5^5=3125



//increment operator ++=+1

//post inc=var++

//pre inc=++var

//examples

let num=1    //null

num1=num1++    //1
console.log(num1)



let num2=5

num2=num2++   //5
console.log(num2)



let num3=2         //null
let num4=num3++  //2
console.log("num3: ",num3)   //3
console.log("num4: ",num4)  //num4: 2


console.clear()


let num5=2              //null
let num6=num5--         //2--==1

let num7= ++num6        //pre inc ++1=3

console.log("num5: ",num5)  //num5: 1
console.log("num6: ",num6)  //num6:3
console.log("num7: ",num7)  //num7:3


//decrement operator --=-1

//post dec=var--
//pre dec= --var
//2.assignment operators

let num11=10

num11    = num11+num11

console.log(num11)   //20


let num12=2

let additionVal=100
num12=num12+additionVal


console.log(num12)  //102

//3.comparison operators or relational operators

// meaning      operator         examples       results
//lessthan         <               5<10           True
//greaterthan      >                5>10          False
//lessthan equal   <=              5<=10          True
//greaterthan equal >=              5>=10         False
//loosytypeEqual    ==              5=="5"        True
//loosytypeNotEqual !=              5!="5"        False
//strictltTypeEqual ===             5==="5"       False
//strictTypeNotEqual !==            5!=="5"       True

// console.log("5")
// console.log(5)

//4.logical operators

//5.bitwise operators

//6.string operators

//7.ternary operators



// examples 

let num1 = 1      // null

    num1 = ++num1  // 1

    console.log(num1);


// let num2 = 5

    num2 = ++num2

    console.log(num2);


// let num3 = 2     

// let num4 = num3++ 

console.log("num3 : ",num3); // num3 : 3
console.log("num4 : ",num4); // num4 : 2

console.clear();



// let num5 = 2      // 
// let num6 = num5-- // 2
// let num7 = ++num6 // ++num6 = 1+2 = 3

console.log("num5 : ",num5); // num 5 : 1
console.log("num6 : ",num6); // num 6 : 3
console.log("num7 : ",num7); // num 7 : 3






// 2. assignment operator

// let num11 = 10

// num11 += num11 
  

// console.log(num11);

// let num12 = 2

// let additionVal = 100

num12 **= additionVal 

console.log(num12);


console.clear();





// 3. comparision or relational operator

// meaning   operator      examples       results 

// lessThen     <            5<3            false

// greaterThen  >            5>3            true

// lessThenEq   <=           5<=40           true

// greaterThenEq >=          5>=.50          true

// loosyTypeEq   ==           5=="5"         true

// loosynotEq    !=           5!="5"         false

// strictlyTypeEq  ===        5==="5"        false

// strictlyNotEq   !==        5!=="5"        true


console.log(5 === "5"); // false
console.log(5 != "5");  // false
console.log(5 !== "4"); // true






// 4. logical operator

// AND    - &&

// true && true && true = true 

// false && true && true = false 

// false && false && false = false

// // OR     - ||

// true || true || true = true 

// false || false || false = false 

// true || false || false = true

// // NOT    - !

// !(true) = false 

// !(false) = true


console.log((5==="5") && (3!=5) && (4===4)) // false 

// false && true && true = false


console.log((5===.5) || (0) || (1===1)); // true 

// false || false || true = true 

console.log(!(2>3)); // true

// !(false) = true


console.log(!(5!=="5") && (7>.7) || (false)); // false

// !(5!=="5") = !(5!=="5") = false

// (7>.7) = true

// false && true = false

// false || false = false 



// 5. ternary operator

// syntex 

 // condition ? statement : statement ;

 // example 

 

 (5==="5") ? console.log("welcome page") : console.log("your password wrong");
 
 

 // concatination +

 let str1 = "iron"

 let str2 = "man"

 console.log(str1 + " " +str2); 

 // Template String

 let str3 = "spider"
 let str4 = "man"

 console.log(`${str3} ${str4}`);

 console.clear();
 

 // Type Conversion 

 // 1. Implicit Type Conversion 

 console.log(typeof("11" + 1));

 // string 

 // string anything string

 console.log(typeof("1" + "1"));
 console.log(typeof("1" + 1));
 console.log(typeof("1" + true));
 console.log(typeof("1" + undefined));
 console.log(typeof("1" + null));
 console.log(typeof("1" + [1,2,3]));
 console.log(typeof("1" + {k:1}));


 // number 

 console.log(typeof(1 + "1"));
 console.log(typeof(1 + 1));
 console.log(typeof(1 + true));
 console.log(typeof(1 + undefined));
 console.log(typeof(1 + null));
 console.log(typeof(1 + [1,2,3]));
 console.log(typeof(1 + {a:1}));

 // boolean 

 console.log(typeof(true + "1"));
 console.log(typeof(true + 1));
 console.log(typeof(true + true));
 console.log(typeof(true + undefined));
 console.log(typeof(true + null));
 console.log(typeof(true + [1,2,3]));
 console.log(typeof(true + {g:1}));
 

 // 2. Explicit Type Conversion

 console.log(12 + Number("11"));

 // Number 

 console.log(Number());
 console.log(Number(""));
 console.log(Number("123"));
 console.log(Number("abc")); // 1
 console.log(Number(undefined)); // 0
 console.log(Number(12));
 console.log(Number(true));
 console.log(Number(false));
 console.log(Number(null));
 console.log(Number([123,456]));
 console.log(Number({k:1}));


 // Boolean

 console.log(Boolean());
 console.log(Boolean(""));
 console.log(Boolean("123"));
 console.log(Boolean("abc"));
 console.log(Boolean(undefined));
 console.log(Boolean(12));
 console.log(Boolean(0));
 console.log(Boolean(-1));
 console.log(Boolean(true));
 console.log(Boolean(false));
 console.log(Boolean(null));
 console.log(Boolean([1,2,3]));
 console.log(Boolean({j:4}));

console.clear();


 // flow control statement

 // 1. conditional statement
 
 



 // 1. if statement

 // if(condition){// statement}

 // condition true = allow

 // example 

 if(5=="5"){
    console.log("true value");
 }




 // 2. if else statement

 // if(condition){//statement}else{//statement}

 // condition true = if , false = else

 // example 

 if(8>7){

    console.log("true part");
    

 }else{
    console.log("false part");
    
 }



 // 3. else if statement

//  let hour = prompt("enter the time 1 to 24")

//  if(hour >= 1 && hour <= 6 ){

//     alert("good morning");
    
//  }else if(hour >= 7 && hour <= 12){

//     alert("morning");
    
//  }else if(hour >= 13 && hour <= 16){
//     alert("good Afternoon");
    
//  }else if(hour >= 17 && hour <= 19){
//     alert("good evening");
    
//  }else{
//     alert("good night");
    
//  }




 // 4. nested if statement 

//  let age = prompt("enter your age")
//  let height = prompt("enter your height (cm)")
//  let weight  = prompt("enter your weight (kg)")

//  if(age >= 18){
//     if(height >= 155){
//         if(weight >= 55){
//              alert("congatulation your selected😊😊");
             
//         }else{
//             alert(`your weight is ${weight}kg, not enough`);
            
//         }
//     }else{
//         alert(`your height is ${height}cm, not enough`);
        
//     }
//  }else{
//     alert(`your age is ${age} old, not enough`);
    
//  }




 // 5. switch case statement

//  switch(){
//     case value : statement ; break ;
//     case value : statement ; break ;
//     case value : statement ; break ;
//     case value : statement ; break ;
//  }


// example 

// let trafficLight = ""

// switch(trafficLight){
//     case "red" : console.log("stop vechile"); break;
//     case "yellow" : console.log("start vechile"); break;
//     case "green"  : console.log("goo goo"); break;
//     default : console.log("careful");
    
// }



 // 2. looping statement

 // 1 to 5

 console.log(1);
 console.log(2);
 console.log(3);
 console.log(4);
 console.log(5);

 // for loop

 // for(intialiazation ; condition ; iteration){// statement}

 // example

 for(let i = 1 ; i <= 5 ; i++){

    console.log(i); // 1 2 3 4 5
    
 }

 // flow 
  

 // i = 1 ; 1 <= 5 = true ; 1++ = 2
 // i = 2 ; 2 <= 5 = true ; 2++ = 3
 // i = 3 ; 3 <= 5 = true ; 3++ = 4
 // i = 4 ; 4 <= 5 = true ; 4++ = 5
 // i = 5 ; 5 <= 5 = true ; 5++ = 6
 // i = 6 ; 6 <= 5 = false;

 // odd number

 // 1 to 10 odd number want print 


 for(let i = 1 ; i <= 10 ; i++){
    
    if(i%2==0){

        console.log("even :", i);
        

    }
    
 }

 // while loop 

 // intialiazation
 // while(condition){
 // statement
 
 // iteration
 //}


 let value = 3
 while(value >= 10){

    console.log(value);

    value--
    
 }


 // val = 3 ;  3 >= 0 = true ; l v = 3 ; 3-- = 2
 // val = 2 ;  2 >= 0 = true ; l v = 2 ; 2-- = 1
 // val = 1 ;  1 >= 0 = true ; l v = 1 ; 1-- = 0
 // val = 0 ;  0 >= 0 = true ; l v = 0 ; 0-- = -1
 // val = -1;  -1 >= 0 = false.

 // do while loop 

 // intialiazation

 // do{// statement // iteration}

 // while(condition)


 // example

 let val1 = 3

 do {
   console.log(val1);

   val1--;
 } 
 
 while (val1 >= 0);

 // for of loop

 // string , array , function

 // syntex

//  for(let a of variable){
//     console.log(a);
    
//  }

let str6 = "javascript"
let array1 = ["apple","orange","banana","pineapple"]

for(let a of array1){
    console.log(a);
    
}

 // for in loop

 // object

 let emp = {
    name1 : "john",
    role  : "developer",
    salary : 1000000
 }

 for(let b in emp){
    
    console.log(emp[b]);
    
 }




//1 to 10 inside prime number will find

for(let i=0;i<=10;i++){
    let isPrime=true
    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            isPrime=false
            break
        }
        isPrime ? console.log(`Not Prime: ${i}` ):
        console.log(`prime: ${i}`);
    }
}

//1. 2 to 10
//2. 2 to 5
// if(3%2==0){ 3 false
//}

//3.function

//reusable block of code
//function declaration
//reduce time and effort
//abtsraction
//easy debugging
//block code

//syntax
function one(parameter){
    //statement
    //return
    //yield

}
one("argument")

//example
function two(){
    console.log("Hello")
}
two()

// parameter and arugument
function three(a){
    console.log(a)
}
three()


//return- reuable the value
function reUse1(a){
    return a

}
reUse1(100)

let newMem=reUse1(100)
console.log(newMem)

function four(){
    console.log("four :",newMem)
}
four()

//reusable code
function form(a,b,c){
    console.log("Name :",a)
    console.log("department : ",b)
    console.log("gender :",c)
}
form("kamal","ece","male")
form("praveen","ece","male")
form("living","ece","female")




//types of function:-

//syntax

//1. Named function
function Named(parameter){
    console.log(parameter)
}

Named("Named function")

//2. annonymous function

let annonymous=function(parameter){
    console.log(parameter)
}

annonymous("annonymous function")

//3. Arrow function

let arrow=(parameter)=>{
    console.log(parameter)
}

arrow("arrow function")


//Scopes

function checkScope(){
    if(true){
        var a11="global scope and function scope"
        let b11="block scope"
        const c11="block scope"
    }
    console.log(a11)
    // console.log(b11) //error

}
checkScope()




//hosisting

var a12=10
console.log(a12) //10

let b12=12
console.log(b12) //error

const c12=11
console.log(c12) //error




//callback function and higher order function

function function1(){
    console.log("higher order function")
}
function function2(){
    console.log("callback function")
}

function1(function2())

//example
function add(callback,a,b){ //callback =sub, a=20, b=40
    console.log(a+b) // 20+40=60 
    callback(20,20) //sub(20,20)

}
add(function(a,b){
    console.log(a+b)
},20,40) //60

function sub(num1,num2){ //n1=20, n2=20
    console.log(num1-num2) //20-20=0
}


//currying
function a(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}
a(20)(30)(40) //90

//IIFE- self invoke function

// (function(parameter){
//     console.log("hi")
// })()

(function(product,discount){
    alert(`now sales is going on product :- ${product}, on discount ${discount} % `)
})("shoes",50)

function form1(name, department, gender){
    console.log("name :-", name)
    console.log("department :-", department)
    console.log("gender :-", gender)
}
form1("kamal","ece","male")


//generator function

function* gen(){
    yield "you get 50% off",
    yield "you get 10% off",
    yield "Try again see next time",
    yield "try again",
    yield "you got 100% cashback"
}
let genVal1=gen()
// console.log(genVal1.next().value) //you get 50% off


for(let a of genVal1){
    console.log(a)
}

//4.date