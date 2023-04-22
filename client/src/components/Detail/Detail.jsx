import React from "react"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css"; 



export default function Detail(){

  const [character, setCharacter] = useState({}); 
  const {detailId} = useParams(); 

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return(
    <div >
    
        <h1 className={styles.divcards}>{character.name}</h1>
        <h2 className={styles.divcards}>{character.gender}</h2>
        <h2 className={styles.divcards}>{character.species}</h2>
        <h2 className={styles.divcards}>{character.origin?.name}</h2>
        <h2 className={styles.divcards}>{character.status?.name}</h2>
        <img className={styles.img} src={character.image} alt="Espere, se esta cargando" />
        <br />
        <Link to='/home'> <button className={styles.regreso}>regreso a home</button></Link>

    </div>
  )
  

}