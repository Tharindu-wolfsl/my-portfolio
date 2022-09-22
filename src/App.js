import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/layouts/Header';
import Navigation from './components/layouts/Navigation';
import Loader from './components/Loader';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Team from './components/layouts/Team';
import Service from './components/layouts/Service';
import Portfolio from './components/layouts/Portfolio';
import Contacts from './components/layouts/Contacts';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
       <Navigation/>
       <Home/>
       <About/>
       <Team/>
       <Service/>
       <Portfolio/>
       <Contacts/>
       <Footer/>
       <Routes>
        
        {/* <Route path="/" element={<Header/>} exact/>
        <Route path="/" element={<Navigation/>} exact/> */}
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
