import './App.css'
import { useState, useEffect } from 'react'
import Cards from './components/cards/Cards.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error.jsx'
import Form from './components/Form/Form.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import {Favorites} from './components/Favorites/Favorites'
import Porfolio from './components/Porfolio/Porfolio'
import axios from "axios"

function App () {
   const location = useLocation(); 
   const navigate = useNavigate(); 

   const username = 'londerogerardo@gmail.com';
   const password = 'Gera2023P1087';

const [access, setAccess] = useState(false);

const [characters, setCharacters] = useState([]); // cree un estado de characters

//const example = {
//  name: 'Morty Smith',
// species: 'Human',
// gender: 'Male',
//image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//};

function login(userData) {
   console.log(userData)
   const { username, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}

const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 useEffect(() => {
   console.log(access)
 }, [access]);

 const onClose = (id) => {
    setCharacters(characters.filter(char =>  char.id !== id))
   
 }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div>
      {location.pathname !== '/' && <Navbar onSearch={onSearch}/>}
     <Routes>
      <Route exact path='/' element={<Form login={login}/>}/>
      <Route  path='/home' element ={<Cards characters={characters}
      onClose={onClose}/>}/> 
      <Route path='/porfolio' element= {<Porfolio />}/>
      <Route path='/detail/:detailId' element={<Detail />}/>
      <Route path='/about' element={<About />} />
      <Route path='/favorites' element={<Favorites characters={characters}
      onClose={onClose} />} />
      <Route path= '*' element={<Error />}/>
     </Routes>
     </div>


   



     //<div>
        //<div className='App' style={{ padding: '25px' }}>
       //<Navbar onSearch={onSearch}/> 
      // </div>
      //<div>
       // <Cards
        //  characters={characters}
        //  onClose={onClose}
       // />
     // </div> 
  // </div>
  )
}

export default App
