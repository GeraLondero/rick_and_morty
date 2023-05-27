import { useState } from "react";
import styles from "./searchbar.module.css"


export default function SearchBar(props) {

   const [character, setCharacter] = useState(""); 

   const handleChange = (e) => {
      const { value } = e.target;
      console.log(value) 
      setCharacter(value)
   }
   return (
      <div className="imput">
          <input type='search' placeholder="Buscar" onChange={handleChange}/>
      <button onClick={()=>props.onSearch(character)} className={styles.button}>Agregar</button> 
      </div>
   );
}
