
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











// Data Structure

//Spread Operator


//array,object

//[...], {...}

//we can two array and two object merge value
//array sperad operator

// let array1=[1,2,3,4]
let array2=[5,6,7,8]
let newArr=[...array1,...array2,9,10]
console.log(newArr)

//object spread operator

let obj1={
    name1:"a",
    role:"developer",
    salary:"10000000"
}

let obj2={
    name2:"b",
    role:"manager",
    salary:"20000000"
}

let newObj={...obj1,...obj2}
console.log(newObj)



//rest operator

//function

//(...)

// we can store multiple parameter value in one variable

function adding(a,b,c,d,e,f,g,h){
    console.log(a)
    let remainVal=d 
    console.log(remainVal)
    console.log(a+b+c+remainVal[0])

}
adding(1,2,3,4,5,6,7,8)

//destructure

let arr1=[1,2,3,4]

// let a1=arr1[0]
let a2=arr1[1]
let a3=arr1[2]
let a4=arr1[3]
console.log(a2+a3+a4)


//destructure array

let [b1,b2,b3,b4]=arr1


console.log(b1+b2+b3+b4)


//object destructure

let object1={
    name:"john",
    role:"developer",

}

let c1=object1.name1
let c2=object1.role
console.log(c1,c2)



//destructure of object


let {name,role}=object1
console.log(name,role)



//nested array

let nested=[1,2,3,[4,5,6,[7,8]]]
let d1=nested[0]
let d2=nested[3][0]
let d3=nested[3][1]
let d4=nested[3][2][0]
let d5=nested[3][2][1]
console.log(d1,d2,d3,d4,d5)

//destructure of nested array

let [e1,e2,e3,[e4,e5,e6,[e7,e8]]]=nested
console.log(e1,e4,e7,e8)




//array advanced concept (Es6)

//Array manipulate method



//if you are use adding, you can add multiple value in array


//if you are using remove method, you can remove only one value in array



let normalArr=[1,2,3,4,5,6,"hello",true,undefined,null,[1,2,3],{k:1}]
console.log(normalArr)
console.log(normalArr[0]);

console.log(normalArr[3]);

console.log(normalArr[0]);

console.log(normalArr[normalArr.length-1]);


//homogenious array - same type of value

//heterogenious array - different type of value

//flexible array - u can store any type of value in array

// let new1=[1,2,3,4]

//push() - u can add last side of array value

new1.push(5,6,7,8)
console.log(new1)


//push() - u can add last side of array value

let new1=[1,2,3,4]

new1.push(5,6,7,8)
console.log(new1)

//pop() - u can remove last side of array value

new1.pop()


//shift() - u can first side of array value

new1.shift()
console.log(new1)

//unshift() - u can add first side of array value

new1.unshift(0)
console.log(new1)

//splice() - u can add and remove value in array

//startingIndex, removeCount, AddingValue

let new2=[1,2,3,40,50,60,70]

new2.splice(3,2,100,200)
console.log(new2);



let example=[1,2,3,4] //1,2,3,4,"four","five"

example.splice(3,1,"four","five")
console.log(example);


//merge method - u can merge two array value in one array

//concat

let merge1=[1,2,3,4]
let merge2=[5,6,7,8]

let mergeArr=merge1.concat(merge2)
console.log(merge1);
console.log(mergeArr);

//slice()

let arr14=[1,2,3,"a","b","c",4,5,6]

let sliceVal=arr14.slice(3,6) //starting index, ending index(not include)
console.log(sliceVal);


//flat()

let nested1=[1,2,3,[4,5,6,[7,8,[9,10,[11]]]]]
let nestedVal=nested1.flat()
console.log(nested1.flat(4));
console.log(nested);

//fill()

let arr15=[1,2,3,4] //1,2,3,"four"

arr15.fill("four",1,3) //value, starting index, ending index(not include)
console.log(arr15);


//includes()

let arr16=[1,2,3,4,5]
let includesVal=arr16.includes(3)

console.log(includesVal);




//sort()

let arr17=[3,2,1,4,5]
let sortVal=arr17.sort()

console.log(sortVal);


//indexOf()

let random1=[1,2,3,4,3,2,1]
let indexOfVal=random1.indexOf(3,3) //value, starting index

console.log(indexOfVal);wz





//lastIndex()

let lastIndexVal=random1.lastIndexOf(3)

console.log(lastIndexVal);

//reverse()

let arr18=[1,2,3,4,5]
let reverseVal=arr18.reverse()

console.log(reverseVal);




//Array higher order method

function one1(){
    console.log("jhfshhsd");
    
}
function two2(){
    console.log("23456789765432");
    
}
one1(two2())


let games=["cricket","football","hockey","badminton","golf"]

//1.forEach()
let newForEach=games.forEach((currentElement,index,TotalArray)=>{
    return("forEcah :",currentElement)
    // console.log(currentElement);
    // console.log(index);
    // console.log(TotalArray);
    
    
    
})
console.log(newForEach)

//2.map()

let newMap=games.map((c,i,t)=>{
    console.log(c,i,t);
})


//3.filter()

let employyee=[
    {name:"john", role:"developer", salary:1000000},
    {name:"peter", role:"manager", salary:2000000},
    {name:"michael", role:"developer", salary:1500000},
    {name:"susan", role:"designer", salary:1200000},
    {name:"lisa", role:"developer", salary:1800000}
]
let employeeSalary=employee.filter((c,i,t)=>{
    return c.salary>2000000
})
console.log(employeeSalary);


//4.find()

let employeeHighestSalary=employee.find((c,i,t)=>{
    return c.salary>2000000
})



//5.reduce()

employee = [
  { name1: "a", salary: 100000 },
  { name1: "b", salary: 200000 },
  { name1: "c", salary: 300000 },
  { name1: "d", salary: 400000 },
  { name1: "e", salary: 500000 },
];

let TotalSalary = employee.reduce((acc,c,i,t)=>{
   return acc + c.salary

   //  0 + 1 = 1
   //  1 + 2 = 3
   //  3 + 3 = 6
   //  6 + 4 = 10
   //  10 + 5 = 15

   // return 15 

},0) // 1 // 3 // 6 // 10 // 15

console.log(TotalSalary);


// 6. some()  - OR

let someVal = [1,2,3,4]

let some1 = someVal.some((c,i,t)=>{

   return  c%2==0

   // 1%2==0 false
   // 2%2==0 true
   // 3%2==0 false
   // 4%2==0 true

   // false || true || false || true = true

})

console.log(some1);


// 7. every() - AND

let everyArr = [2,2,2,2]

let everyVal = everyArr.every((c,i,t)=>{
   return c%2==0
})

console.log(everyVal);



// 8. sort()

let randomArr = [2,1,356,4,2345,5,60000,8]

// 1 2 4 356 5 2345 8 60000

// 1 2 4 5 356 8 2345 60000

// 1 2 4 5 8 356 2345 60000

let sortVal1 = randomArr.sort()

console.log(sortVal1);


let higherSort = randomArr.sort((a,b)=>{
   return b-a
})

console.log(higherSort);


// covertion method  arr to str


// toString()

let raArrVal = [1,2,3,4]

let strArr = raArrVal.toString()

console.log((strArr));


// join()

let joinArr = raArrVal.join(4)

console.log(joinArr);


let abc1 = [1,2,3,4] // 1,2,"three",4

// let abc = [1, 2, 3, 4];

// abc.splice(2, 1, "three");

// console.log(abc);


console.clear();


// String Methods 

// charAt(), in --> val

let str = "javascript"

let charAtVal = str.charAt(9)

console.log(charAtVal);






// charCodeAt(), in --> asscii value

let charCodeAtVal = str.charCodeAt(1)

console.log(charCodeAtVal);





// length, 

let lengthVal = str.length

console.log(lengthVal);


str = "javaScript";

// slice(),

let sliceVal1 = str.slice(4,10) // Si ,Ei+1

console.log(sliceVal1);



// toUpperCase(), 

let upper = str.toUpperCase()

console.log(upper);

console.log(str);

// toLowerCase(), 

let lower = str.toLowerCase()

console.log(lower);


// trim(), - 

let str11 = " hello "

console.log(str11);


let trimVal = str11.trim()

console.log(trimVal);

// trimStart()

let trimStart = str11.trimStart()

console.log(trimStart);


// trimEnd()

let trimEnd = str11.trimEnd()

console.log(trimEnd);


// includes(),

let str22 = "hello world"

let inc = str22.includes("H")

console.log(inc);




// split(), 

let str33 = "iron-man"

let splitVal = str33.split("-")

console.log(splitVal);




// indexOf(), 

let str44 = "hello world"

let ind1 = str44.indexOf("l",4) // value,Fi

console.log(ind1);


// lastIndexOf()

let lastInd = str44.lastIndexOf("l",8)

console.log(lastInd);


// replace(), 

let str5 = "pythonDeveloper"

let replaceVal = str5.replace("python","javascript") // change , changed

console.log(replaceVal);


// startsWith(), 

let str66 = "hello"

let start1 = str66.startsWith("h")

console.log(start1);



// endsWith()

let last1 = str66.endsWith("o")

console.log(last1);


// repeat

let str7 = "welcome"

let repeatVal = str7.repeat(111)

console.log(repeatVal);

console.log(clear)




//Date 

let date1= new Date()
console.log(date1);


//get()

//year

let year1=date1.getFullYear()

console.log(year1);


//Date

let date2=date1.getDate()
console.log(date2);

//month

let month=date1.getMonth()
console.log(month);


//day 

let day=date1.getDay()
console.log(day);

//hours

let hours=date1.getHours()
console.log(hours);

//minutes

let minutes=date1.getMinutes()
console.log(minutes);

//secounds

let secounds=date1.getSeconds()
console.log(secounds);

//local date

//time

let time=date1.toLocaleTimeString()
console.log(time)

//date

let date3=date1.toLocaleDateString()
console.log(date3);

//time and date

let all=date1.toLocaleString()
console.log(all);



//set()

let date11=new Date()
console.log(date11);

//year

let year2=date11.setFullYear(2025)
console.log(year2);


//month

date11.setMonth(9) 
console.log(date11);

//Date

date11.setDate(25)
console.log(date11);

//time

date11.setTime(5)
console.log(date11);

//minutes

date11.setMinutes(55)
console.log(date11);

//seconds

date11.setSeconds(1000)
console.log(date11);


//birthday day finder

// let year5=2004
// let month5=1
// let date5=29

let year5=prompt("Enter your dob year")
let month5=prompt("Enter your dob month in number")
let date5=prompt("Enter your dob date")

// let birthDay=new Date(year5,month5-1,date5)
// console.log(birthDay);
let rawdate=new Date()
rawdate.setFullYear(year5)
rawdate.setMonth(month5-1)
rawdate.setDate(date5)

console.log(rawdate);

let day5=rawdate.getDay()
console.log(day5);

let dayraw=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

console.log(dayraw[day5]);

//asynchronous programming


//setTimeOut()

//syntax
setTimeout(()=>{
    console.log("hello");
    
},50000)



//setTimeInterval()

setTimeInterval(()=>{
    console.log("hello");
    
},50000)


function one(){
    console.log("One");
    
}

function two(){
    console.log("Two");
    
}

function three(){
    console.log("Three");
    
}

one()
setTimeout(two,2000)
three()



//setIntervalTime()


// let time2=document.querySelector(".time")
setInterval(()=>{
    let time=new Date()

    let time1=time.toLocaleTimeString()
    time2.innerHTML=time1
    console.log(time1);
    
},1000)


//promise API

//resolve Data - successful data  then()

//reject data - Error data     catch()

//bending data - coming data from server  finally()

//fetch()

//api link inside the data store you want means u can use fetch keyword

//fetch("https://jsonplaceholder.typicode.com/todos/1")

let api="https://jsonplaceholder.typicode.com/todos/1"

fetch(api)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})

return data.json()

.catch((error)=>{
    // console.log(error.message);
    console.warn(error.message);
    
    
})
.finally((r)=>{
    console.log(r);
    
})

.then((data77)=>{
    data77.forEach((c,i,t)=>{
        console.log(c.title);
        
    })
})





// console.log("rfgefhjkrfjhgdsfghjkhgfdefcgvbnbvcxdfghbs");

// console.clear()


// how to find leap year

let year=2028

if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not leap year`);
}

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(`${year} is leap year`);
        }else{
            console.log(`${year} is not leap year`);
        }
    }else{
        console.log(`${year} is leap year`);
    }
}








































