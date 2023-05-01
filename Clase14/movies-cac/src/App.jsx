import { PeliculasGrid } from './PeliculasGrid';
import './App.css';

function App() {
  return (
    <div>
      <header className="title">PELUCULAS</header>
        <main>
          {/* componente grilla de peliculas */}
          <PeliculasGrid/>
        </main>
        
      
    </div>
  );
}

export default App;
