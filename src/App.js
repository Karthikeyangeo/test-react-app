
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <AddColor />
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