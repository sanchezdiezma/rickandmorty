import React, {useEffect, useState} from "react"
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Logo from "./assets/logo.png";




function App() {


  const [characters, setCharacters] = useState ([]);
  const [info, setInfo] = useState ({});
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacter = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results);
      setInfo(data.info);
    }) 
    .catch(error => console.log(error))
  };

  const onPrevious = () => {
      fetchCharacter(info.prev);
  }

  const onNext = () => {
      fetchCharacter(info.next);
  }

  useEffect (() => {
    fetchCharacter(initialUrl);
  },[])

  return (
    <>
    <Navbar brand={'Rick and Morty App'}/>

      <picture>
        <img className="img-fluid  rounded mx-auto d-block m-auto p-2 "  src={Logo} alt="Responsive" />
      </picture>
       
   
      
    


    <div className="container mt-5">
        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}
        />
    <Characters characters={characters}/>
    

        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
          />
       
       
    

    </div>

    </>
    
  );
}


export default App;


