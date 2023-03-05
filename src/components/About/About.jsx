import React from "react"; 
import styles from "./About.module.css"; 
import perfil from "../../images/gera-perfil.png"

export default function Abaut () {
  return(
    <div>
        <img src={perfil} alt="Foto de perfil" className={styles.img}/>
        <div className={styles.datos}>
        <h1 className={styles.presentacion}> Soy Gerardo Andres Londero</h1>
        <h2 className={styles.h2}> Esta es mi primer aplicacion realizada con react</h2>
        <h3 className={styles.introduccion}>Es objetivo de la misma es la practica y mi maxmo crecimiento 
          profesional  <br /> dentro del mundo de la programacion.
        </h3>
        </div>
    </div>
  )
}