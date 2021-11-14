
import './App.css';
import React,{ useState ,useContext,createContext} from "react";
import ReactDOM from "react-dom";

const initialState = 10;

const context = createContext({state:40});
const MyGrandChild =() =>{
  const {state,setState} = useContext(context);
  console.log(state,setState);

  const increment =() =>{
    setState(state+1);
  }

  return (
    <div>
      <button onClick={increment}>increment</button>
      {state}
    </div>
  )
}

const MyChild=()=>{
  return(
    <div>
      <MyGrandChild />
    </div>
  )
}


function App() {
  const [state,setState] = useState(initialState);
  const obj ={state:state,setState:setState};
  return (
    <div className="App">
      <context.Provider value={obj}>
        <div>
          <MyChild />
        </div>
      </context.Provider>


      {/* <AddColor /> */}
    </div>
  );
}

export default App;

function AddColor(){
  const [color,setColor] = useState("");
  const styles ={backgroundColor:color};
  const [colors,setColors]=useState(["pink","orange","crimson","violet"]); 
  
  return(
    <div>
      <input 
        style={styles}
        onChange={(event)=> setColor(event.target.value)}
        placeholder="enter a color"
      />
      <button onClick={()=> setColors([...colors,color])}>Add Color</button>
      {colors.map((clr)=>(
        <ColorBox clr={clr} />
      ))}
      </div>
  );
}

function ColorBox({clr}){

  const styles = {
    backgroundColor : clr, 
    height: "50px",
    width:"200px",
    margin:"10px  0px"
  }

  return(
    <div style = {styles}></div>
  )
}