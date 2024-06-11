import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState<number>(0);
  const [numberData, setNumberData] = useState<number>(0);

  const numberArray =[1,2,3,4,5,6,7,8];
  const people = [
    { name:"john", age: 30, status: "active"},
    {name:"jane", age: 25, status: "inactive"},
    {name:"mike", age: 35, status: "active"},
  ];
  useEffect(() => {
    setData(1);
  },[]); 
   const addData =() => {
    const oldData = data;
    const newData = oldData + 1;
    setData(newData);
    console.log(newData);

  };
  const decrementData = () => {
    setNumberData(numberData - 1);
  }

  return (
    <>
    <button title="title"onClick={addData} className={'number ${data}'}>
    add data
    
    </button>
    <div>
      Incremented Data: {data}
    </div>
    <br />
    <button onClick={decrementData}className={'decrement= ${number}'}>
      decrement
    </button>
    <div> decremented Data: {numberData}</div>
    {numberArray.map((item, i) => {
      return <div key ={i}>{item}</div>;
    })}
    {people.map((item, i) => {
      return (
        <div key={i}>
        {item.status === "active" && (
          <>
          
        <div>name: {item.name}</div>
          <div>Age:{item.age}</div>
          <br />
        
          </>
        )}
    </div>
    )})}
    
  

<hr />
{people.map((item, i) => {
  return (
    <div key={i}>
    {item.status === "active" ? (
      <>
      
    <div>name: {item.name}</div>
      <div>Age:{item.age}</div>
      <br />
      </>):(<>hggj</>)

    }
    </div>)})}

</>)
}
export default App;
