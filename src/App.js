import './App.css';
import NavBar from './NavBar';
import { Route, Routes} from "react-router-dom";
import Visualization  from './components/Visualization';
import Home from './pages/Home';
import Hipotesis from './pages/Hipotesis';

function App() {
  return (
    <>
      <NavBar />
      <div className='Container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/hipotesis" element={<Hipotesis />}/>
          <Route path="/Visualizaciones" element={<Visualization />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
