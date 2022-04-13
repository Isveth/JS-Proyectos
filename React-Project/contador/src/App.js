import './App.css';
import morita from './imagenes/morita.jpg'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'
function App() {

  const [numClics, setNumClics] = useState(0)
  const manejarClic = () => {
    setNumClics(numClics+1)
    console.log('clic')
  }

  const reiniciar = () => setNumClics(0)
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={morita} alt="Logo de Morita" />
      </div>
      <div className='contenedor'>
        <Contador
          numClics={numClics}/>
        <div className='botones'>
          <Boton
            texto='Clic'
            esDeClic={true}
            manejarClic={manejarClic}/>

          <Boton
            texto='Reiniciar'
            esDeClic={false}
            manejarClic={reiniciar}/>  
          </div>  
        
      </div> 
    </div>
  );
}

export default App;
