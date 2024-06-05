import logo from './logo.svg';
import './App.css';

function App() {
  //let str = "hello"
  //let str2 = "world"
  //if (str === "hello" && str2 === "world"){
//console.log("hello world")
 // }
 /* const student1 ={
    name:"veer",
    address: "bihar",
    roll:"55"
  };
  const student2 ={
    name:"veer",
    address: "delhi",
    roll: "55"
  } ;
  const fun1=()=> {
    const num1 = 5;
    const num2 = 10;
    const sum = num1+num2;
    console.log(sum);
  };

  if (student1.name === student2.name){
  fun1();
    

    }


  else{
    console.log("world");
  }*/
  //const arr1 =[1,2,3,4,5,6];
  //for(let item of arr1){
    //console.log(item);
/*const student = [
  { name: "john", age: 30},
  {name: "jane", age: 25},
  {name: "mike", age: 35},
];
student.forEach((person)=>{
  console.log(`Name: ${person.name},Age: ${person.age}`);
});*/
/*const employee = {
  name: "john",
  age: 30,
  occupation: "engineer",
};
//console.log(employee.occupation); 
for(const key in employee){
  if(employee.hasOwnProperty(key)){
    console.log(`${key}: ${employee[key]}`);
  }
}*/
//===================================================
/*const employees = [
  {name: "alice", age: 30, salary: 50},
  {name: "bob", age: 25, salary: 45},
  {name: "charlie", age: 35, salary: 55},
  {name: "david", age: 28, salary: 48},
];

const mappedEmployees= employees.map((item)=>  {

  
  return{
    ...item,
    salary:item.salary + 100,
  };
},
[]);
console.log('mappedEmployee',mappedEmployees);*/

//==============================================


  
//for (let person of people){
  //console.log(`Name: ${person.name},Age: ${person.age}`);
  //}


  const products = [
    {id: 1001, name: "laptop", price: 1000, category: "Electronics"},
    {id: 1002, name: "shirt", price: 50, category: "clothing"},
    {id: 1003, name: "coffee maker", price: 80, category: "home appliances"},
    {id: 1004, name: "headphones", price: 200, category: "Electronics"},
    {id: 1005, name: "pants", price: 60, category: "clothing"},
  ];
    
  const filteredProducts = products.filter((item)=> {
    return item.category === "clothing";
  });
  console.log("filteredProducts",filteredProducts);
  const foundproducts = products.find((item)=> {
    return item.id === 1002;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
