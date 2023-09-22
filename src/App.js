import "./styles.css";
import { useReducer } from 'react'

const reducer = (state,action) =>{
  switch (action.type){
  case "INCREMENT": 
  return {count : state.count+1}
  case "toggleShowText":
  return{showText: !state.showText}
  case "OnlineHomie":
  return{showHomie:!state.showHomie}
}
}
export default function App() {
  const[state, dispatch] = useReducer(reducer, {count:0,showText:true,showHomie:true})


  return (
    <div className="App">
    <p>{state.count}</p>
    {state.showText && <p>Kabeer</p>}
    <button onClick={()=>{
      dispatch({type:"INCREMENT"})
    }}>Change</button>
    <button onClick={()=>{
      dispatch({type:"toggleShowText"})
    }}>ShowText</button>
    <h2>{state.showHomie}</h2>
   <button onClick={()=>{
     dispatch({type:"OnlineHomie"})
   }}>Show Online Homie</button>
     {state.showHomie && <h1>Adil kaakla</h1>}
    </div>
  );
}
