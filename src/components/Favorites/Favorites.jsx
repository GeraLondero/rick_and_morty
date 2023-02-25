import React from "react";
import { useSelector, useDispatch} from "react-redux";
import  Card from "../card/Card.jsx";
import styles from "./favorites.module.css"
import { filterCards, orderCards, reset } from "../../redux/actions/actions.js";


export  function Favorites(props){
  const dispatch = useDispatch(); 
   const myFavorites = useSelector((s) =>s.myFavorites); 
   console.log(myFavorites)
   

  function handleClick(e){
    const { name, value} = e.target
    if (name === "filter") {
      return dispatch (filterCards(value))
    }
    if (name === "order") {
     return dispatch(orderCards(value))
    }
  }
 
   return (
      
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div>
          <select className={styles.select} name="order" defaultValue={"DEFAULT"} onChange={handleClick}>
            <option value="DEFAULT" disabled>Select order</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select className={styles.select} name="filter" defaultValue={"DEFAULT"}  onChange={handleClick}>
            <option value="DEFAULT" disabled>Select filter</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
          <div>
            <button className={styles.reset} onClick={()=> dispatch(reset())}>Reset</button>
          </div>
        </div>
      <h1 className={styles.h1}>¡Tus personajes favoritos!</h1>
        {myFavorites?.map((c) => {
         return(
              <Card
              key={c.name}
              name={c.name}
              species={c.species}
              gender={c.gender}
              image={c.image}
              id={c.id}
              onClose={()=> props.onClose(c.id)}
             />
             )}
  
             )}
     </div>
  
   )
   
}
//const characters = myFavorites.filter((e)=>{
     //return myFavorites.includes(e.id)
   //})
  //const { characters } = props;