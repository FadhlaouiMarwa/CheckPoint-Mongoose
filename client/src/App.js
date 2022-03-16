import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
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
      <h1>MERN Workshop</h1>
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
