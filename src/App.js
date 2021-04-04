import './App.css';
import Imma from './imma';
import Titolo from './titolo'
import {useState} from 'react';


function App() {
const [isactive,Setactive] = useState(false);

  const prova = () => {
    console.log("FUNZIONA");
    Setactive(!isactive);

  }
  return (
    <div className="App">
      <Titolo/>

     
     <p>  
       <button className="Pulsante" onClick={prova}>SCOPRI</button>
     </p>
     {isactive ?
     <Imma /> : null
     }
    
     
    </div>
  );
}

export default App;
