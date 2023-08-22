
import './App.css';
import Appbar from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Appbar/>
     <Routes>
     <Route path='/' element={ <Home/>}/>
     <Route path='/Services' element={ <Service/> }/>
     <Route path='About' element={ <About/> }/>
     <Route path='/Contact' element={ <Contact/> }/>
     <Route path='/Signin' element={  <Signin/> }/>
     </Routes>
    </div>
  );
}

export default App;
