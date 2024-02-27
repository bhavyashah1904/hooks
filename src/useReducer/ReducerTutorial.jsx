import React, { useReducer } from 'react'


const reducer = (state, action) => {
  switch (action.type) { 
    case "INCREMENT" :
      return {count : state.count + 1, showText : state.showText }
    case "TOGGLESHOWTEXT" :
      return {count : state.count, showText : !state.showText}
    default :
    return state;
  }
}

export const UseStateTutorial = () => {

  const [state, dispatch] = useReducer(reducer, {count : 0, showText : true})

  return ( 
    <div>
      <h1>
        {state.count}
      </h1>
      <button onClick={() => {
        dispatch({type : "INCREMENT"})
        dispatch({type : "TOGGLESHOWTEXT"})  
      }}>Click Here</button>
      {state.showText && <p>This is the text</p>}
    </div>
  )
}

export default UseStateTutorial;
