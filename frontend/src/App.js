import './App.css';
import Footer from './components/footer/footer';
import PrimarySearchAppBar from './components/navbar/Navbar';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Router from './Router';




function App() {
  return (
    <BrowserRouter>
      <div className="container">
          <div className="header">
            <PrimarySearchAppBar/>
          </div>
          
          <div className="router-div">
            <Router/>
          </div>
          
          
          <div className="footer">
            <Footer/>
          </div>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
