import React from 'react';
import './App.css';
import Counter from './Components/Counter';

let myName: string = 'Muhammad Hasan';
let myAge: number = 26;
let ages: number[] = [78, 66, 52, 42, 37, 35];
let names: string [] = ['Mizan', 'Papia', 'Aklima', 'Masaud', 'Masuma'];

let person1: {name: string, age: number, weight: number} = {
  name: 'Muhammad Hasan',
  age: 26,
  weight: 58
}

// Object declaration using interface
interface Person2{
  name: string,
  age: number,
  weight: number,
  height?: number, // ? makes it optional
  employed: string | boolean, // This is union in TS.
  location? : any, // Means it can be anything
}
let person2:Person2  = {
  name: 'Muhammad Hasan',
  age: 26,
  weight: 58,
  employed: true,
}

// Object declaration using type
type School ={
  name: string,
  students: number,
}
let school1 : School ={
  name: 'Model',
  students: 30000,
}

const sayName = (name: string, times: number):string =>{
  // void means no return
  const say = name + times;
  return say;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
