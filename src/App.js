import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import Footer from './components/footer';
import React, {useState} from 'react';

async function getData(){
  return await Promise.resolve("I made it !");
}
const data = getData();
// nó sẽ trả về Promise pending
console.log(data);
// muốn trả về I made it ! thì dùng lệnh .then
getData().then(result => console.log(result));

let c = { greeting: "Hey!"};
let d;
d = c;
c.greeting = "hello";
console.log(d.greeting);
function App() {

  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count value: {count}</p>
      <button onClick={() => setCount(100+1)}>Click</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App;