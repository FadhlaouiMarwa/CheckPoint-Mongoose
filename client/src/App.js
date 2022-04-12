import { Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <h2>MERN Workshop</h2>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to={"/add"}><Button style={{width:250,height:50}}>Ajouter un contact</Button></Link>
      <Link to={"/"}><Button style={{width:250,height:50}}>Home</Button></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
