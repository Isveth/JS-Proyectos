import './App.css';
import Testimonio from './Componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Propuestas artísticas</h1>
        <Testimonio
          nombre='Kamushka en su máximo explendor'
          coleccion='Coleccion abstracta'
          artista='Guillermo Alfonso'
          proposito='El porposito de esta coleccion es encender la llama que arde en el pecho del espectador'
          imagen='kamushka1'/>
        
        <Testimonio
          nombre='Kamushka en su máximo explendor'
          coleccion='Coleccion abstracta'
          artista='Guillermo Alfonso'
          proposito='El porposito de esta coleccion es encender la llama que arde en el pecho del espectador'
          imagen='Weirdo 5'/>
        
        <Testimonio
          nombre='Kamushka en su máximo explendor'
          coleccion='Coleccion abstracta'
          artista='Guillermo Alfonso'
          proposito='El porposito de esta coleccion es encender la llama que arde en el pecho del espectador'
          imagen='Weirdo'/>
      </div>
      
    </div>
  );
}

export default App;
