
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions.js";
import { connect, useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./card.module.css"; 



export default function Card(props) {

   const [isFav, setIsFav] = useState(false);  
   const dispatch = useDispatch()
   const myFavorites = useSelector((s) => s.myFavorites);

   function handleFavorite(ch){
      if (isFav) {
         setIsFav(false)
      dispatch(deleteFavorite(ch.id))
      } else{
         setIsFav(true)
      dispatch(addFavorite(ch))
      }
   }

   useEffect(() => {
      myFavorites.forEach((ch) => {
         if (ch.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div>
         {
           isFav ? (
            <button onClick={() => handleFavorite(props)}  >❤️</button>
              ) : (
                <button onClick={() => handleFavorite(props)} >🤍</button>
   )
          }
          <button onClick={() => props.onClose(props.id) } >X</button>
       <Link to={`/detail/${props.id}`}> <h2 className={styles.text}> {props.name}  </h2></Link>
         <h2 > {props.species}  </h2>
         <h2 > {props.gender}  </h2>
         <img className={styles.img} src={props.image} alt="Espere, se esta cargando" />
      </div>
   );
}



