//CREATE CONTEXT AND USE CONTEXT HOOKS EXAMPLE TO PASS DATA GLOBALLY IN ANY COMPONENT

// import {
//   createContext,
//   useContext
// } from 'react';
// const Sender = createContext();
// const Header = ()=>{
//   const userData = useContext(Sender);
//   const design = (
//     <h1>{userData.roll}</h1>
//   );
//   return design;
// }
// const Footer = ()=>{
//   const fData = useContext(Sender);
//   console.log(fData);
//   const design = (
//     <h1></h1>
//   );
//   return design;
// }
// const Hooks = ()=>{
//   const data = {
//     name: 'aftab',
//     roll: 3
//   }
//   const design = (
//     <>
//       <Sender.Provider value={data}>
//         <Header/>
//         <Footer/>
//       </Sender.Provider>
//     </>
//   );
//   return design;
// }
// export default Hooks;

//Toggle Functionality using useStae Hooks Same task done using useReducer Hooks check below

// import {
//   useState
// } from 'react';
// const Hooks = ()=>{
//   const[type,setType] = useState("text");
//   const demo = ()=>{
//     type == "text" ? setType("password") : setType("text");
//   }
//   const design = (
//     <>
//       <input type={type} />
//       <button onClick={demo}>Toggle</button>
//     </>
//   );
//   return design;
// }
// export default Hooks;

// Toggle Functionality using useReducer Hooks

// import {
//   useReducer
// } from "react";
//
// const Hooks = ()=>{
//
//   const controlReducer = (currentState,action)=>{
//      if(action == "text"){
//         return "password";
//       }
//      return "text";
//   }
//   const[type,setType] = useReducer(controlReducer,"password");
//   const design = (
//     <>
//       <input type={type}/>
//       <button onClick={()=>setType(type)}>Toggle</button>
//     </>
//   );
//   return design;
// }
// export default Hooks;

//useRef hooks to select any element

// import {
//   useRef
// } from "react";
//
// const Hooks = ()=>{
//   const title = useRef();
//   const demo = ()=>{
//     console.log(title.current.innerHTML);
//   }
//   const design = (
//     <>
//       <h1 ref={title}>Welcome to hooks</h1>
//       <button onClick={demo}>Click</button>
//     </>
//   );
//   return design;
// }
// export default Hooks;

//useCallback hooks mainly used when we have to insert json data or element in array because if we inser
// data using useState hooks then page render each time so,to stop that we use useCallback technique
import {
  useState,
  useCallback
} from 'react';

const Hooks = ()=>{
  const[data,setData] = useState([{
    name: 'aftab',
    roll: 1
  }])


  const addMore = useCallback(()=>{
    return setData((oldData)=>{
      return [
        ... oldData,
        {
          name: 'Hello',
          roll: 2
        }
      ]
    })
  },[data]);

  const design = (
    <>
      <div className="container py-4">
        <table className="table">
          {
            data.map((item)=>{
              const NewTr = (
                <>
                 <tr>
                  <td>{item.name}</td>
                  <td>{item.roll}</td>
                </tr>
                </>
              );
              return NewTr;
            })
          }
        </table>
        <button onClick={addMore}>Add</button>
      </div>
    </>
  );
  return design;
}
export default Hooks;
