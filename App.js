import { useReducer} from "react"
import "./style.css"
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}
function reducer(state,{type,payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        
      }
  }
}
function App(){
  const [{curroperand,prevoperand,operation}, dispatch] = useReducer(reducer, {})
  return(
    <div className="cal-grid">
      
 <div className="output">
   <div className="prev-operand"></div>
      
 <div className="curr-operand"></div>
    
      

    </div>
    <button
        className="span-two"
        
      >
        AC
      </button>
      <button >
        DEL
      </button>
      <button >
        /
      </button>
      <button >
        9
      </button>
      <button >
        8
      </button>
      <button >
        7
      </button>
      <button >
        *
      </button>
      <button >
        6
      </button>
      <button >
        5
      </button>
      <button >
        4
      </button>
      <button >
        +
      </button>
      <button >
        3
      </button>
      <button >
        2
      </button>
      <button >
        1
      </button>
      <button >
        -
      </button>
      <button >
        .
      </button>
      <button >
        0
      </button>
      
      <button
        className="span-two"
      >
        =
      </button>
    </div>
  )
}
export default App;
