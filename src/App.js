import React from 'react'
import "./App.css"
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "./actions";


const App = () => {
  
  const myState =useSelector((state)=>state.changeTheNumber)
  const dispatch =useDispatch();
  return (
    <>
    
    <div className="quantity">
    <h1> Increment/Decrement</h1>
    <h4>Using Recat and Redux</h4>
      <a className="minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
      <input className="Number" type="text" value={myState}/>
      <a className="plus" title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span></a>
    </div>
    </>
  )
}

export default App;
