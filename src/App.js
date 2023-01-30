import './App.css';
import rick_and_morty from './img/rick_and_morty.png'
import { useState } from 'react';
import { Character } from './components/Character';


function App() {
  const [characters,setCharacters]=useState(null)

  const reqApi= async()=>{
    const api=await fetch("https://rickandmortyapi.com/api/character")
    const characterApi=await api.json()
    setCharacters(characterApi.results)
    console.log(characterApi.results)
  }

  return (
    <div className='App'>
      <header className='container-profile'>
      <h1 className='title'>Rick & Morty</h1>

      {characters ?
        (<Character characters={characters} setCharacters={setCharacters}/>)
        :(<>
      <img src={rick_and_morty} alt='rick and morty'/>
      <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
      </>)}
      </header>

    </div>

  );
}

export default App;
