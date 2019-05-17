//Using module system
import Person from './person'
import * as math from './math';

console.log(math.add(20,20));
console.log(math.sub(20,20));
// document.getElementById('myid').innerHTML= math.add(20,40);

//Using Let and Const 

let a = 10;
if(true){
    let a = 20;
    console.log(a);
}
console.log(a);

function demo(){
    {
    let x = 10;
        {
            const x = 150;
            console.log(x);
        }
    x=20;
    console.log(x);
    }
}
// document.getElementById('myid').innerHTML= demo();


//Using for of loop
let iterable = [10, 20, 30];
let allValue = [];
for (const value of iterable) {
  console.log(value);
  allValue += value;
//   document.getElementById('myid').innerHTML=`${allValue}`;
}


//Using Arrow function to display name


const print = (name) =>{
    console.log('Hello Arrow function', name);
    
}
// document.getElementById('myid').innerHTML = `Hellow Arrow function : ${print('Chandra Shekhar')}`;

//Using Arrow function to display number
const addNumber = (a,b) => a+b;
console.log(addNumber(20,30));

//Using Template String

const name = 'Chandra';
const dept = 'Web development';
const email = 'chandrapub@gmail.com';

const details = `Name: ${name}, Dept: ${dept}, and Email: ${email}`;

// document.getElementById('myid').innerHTML = details;
console.log(details);


//Using class improt from person file

let p1 = new Person('Chandra Shekhar Mondal', 'chandrapub@gmail.com');

document.getElementById('myid').innerHTML = `Name: ${p1.name}, and Email: ${p1.email}`;

console.log(p1.name);

//Using Fetch and promises (to fetch the API)  

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body)=>{
        const lis = body.map(data => {
            let li = document.createElement('li');
            let text = `Name: ${data.name}, Email: ${data.email}`
            let textNode = document.createTextNode(text);
            
            li.appendChild(textNode);
            return li;
        });

        lis.forEach((li) => {
            document.getElementById('myid').appendChild(li);
            
        })

    })
    .catch((err)=>console.log(err))