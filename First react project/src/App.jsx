// import Header from "./components/Header"

import { useState , useEffect } from "react";
import Student from "./components/Student";
import UserData from "./components/UserData";
import UserProfile from "./components/UserProfile";
import UserForm from "./components/userForm";

// function App() {
//   const [count, setcount] = useState(0);
//   const [name, setName] = useState("");

//   function increase() {
//     setcount(count + 1);
//   }

//   function decrease() {
//     setcount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
//   }
//   return (
//     <div>
      
//     <UserForm  name = {name} setName={setName}/>

//     <h1>Welcome {name}</h1>
//     {/* <UserProfile name = {name} /> */}

//       {/* <h1>{count}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button> */}

//       {/* <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(e) => setName(e.target.value)}
//       /> */}

//       {/* <h1>Hello {name}</h1> */}



//     </div>
//   );
// }

function App(){
// const [count, setCount] = useState(0)
// const [name , setName] = useState("")

  // useEffect(()=>{
  //   console.log("Name Changes", name)
  // },[name])

  useEffect(()=>{ 
    const timer = setInterval(() => { //initial setup
      console.log("Running...")
    }, 2000);

    return ()=>{  // cleanup
      clearInterval(timer)
    }

  },[])



  return (
    <div>
      <h1>Hello world</h1>

    {/* <input value={name} onChange={(e)=>{
      setName(e.target.value)
    }} /> */}

      <h1>{name}</h1>
      {/* <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button> */}
    </div>
  )
}
export default App;
