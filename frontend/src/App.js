import './App.css';
import PrimarySearchAppBar from './components/navbar';
import { BrowserRouter} from 'react-router-dom';
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
            <h1>Footer</h1>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;