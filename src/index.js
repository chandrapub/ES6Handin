// const a = 10;
// const b = 20;
// const sum = (a, b) => a+b;

// console.log(sum(a,b));

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((body)=>{
        const lis = body.map(data => {
            let li = document.createElement('li');
            let text = 'Name: ${data.name}, Email: ${data.email}'
            
            li.appendChild(testNode);
            return li;
        });

        lis.forEach((li) => {
            document.getElementById('mycustomerlist').appendChild(li);
            
        });
    })
    .catch((err)=>console.log(err))