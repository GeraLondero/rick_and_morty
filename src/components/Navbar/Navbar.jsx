import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Navbar.module.css"; 
import { Link } from "react-router-dom";

export default function Navbar(props){ 
    return (
     <div className={styles.container}>
        <SearchBar onSearch={props.onSearch}/>
        <Link to= "/about" className={styles.about}> Soy About</Link>
        <Link to= "/home" className={styles.home}> Home</Link>
        <Link to= "/favorites" className={styles.favorites}> Favorites</Link>
        <Link to= "./porfolio" className={styles.port}> Porfolio</Link>
     </div>
    )
}