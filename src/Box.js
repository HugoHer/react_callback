import './App.css';
import {useState} from "react";

function Box(props){

  const [count, updateCount] = useState(0);

  function click () {
    props.boxClicked(props.id);
    updateCount (count + 1);
  }

  return (
    <div onclick={() => click()}> 
      <p>Box {props.id}</p>
      <p>Contador Hijo : {count} </p>
      <p> Diferencia con mi Hermano : {count - props.brotherCount}</p>
      </div>
      );
}



export default Box;