
const Character = ({characters,setCharacters}) => {
    const setCharacter=setCharacters
    const volverHome=()=>{
        setCharacter(null)
        
    }
    const character=characters.map(e=>
        <div className="character" key={e.id}>
            <img src={e.image} alt='e.name'/>
            <div className="contenido">
            <h4>{e.name}</h4>
            {e.status==='Alive'?(<span>Alive</span>):(
            <span>Dead</span>)}<br/>
            <span>Episodios:{e.episode.length}</span><br/>
            <span>Especie:{e.species}</span>
        </div>
        </div>)
  return (
    <div className="characters">
        <h1 >personajes</h1>
        <span onClick={volverHome}>volver a la home</span>
        <div className="container-characters">
            {character}
        </div>

    </div>
  )
}

export {Character}