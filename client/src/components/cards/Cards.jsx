
import Card from '../card/Card.jsx';
import styles from "./cards.module.css"; 

export default function Cards(props) {     

   const { characters } = props;
   return  (
   <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <h1 className={styles.h1}>¡Bienvenido, busca tu personaje favorito!</h1>
      {characters.map((c) => (
       
            <Card
            key={c.name}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
            id={c.id}
            onClose={()=> props.onClose(c.id)}
           />
           )

           )}
   </div>
   )
   
}
