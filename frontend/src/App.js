import './App.css';
import PrimarySearchAppBar from './components/navbar';



function App() {
  return (
      <div className="container">
          <div className="header">
            <PrimarySearchAppBar/>
          </div>
          
          <div className="router-div">
            {/* routers */}
          </div>
          
          
          <div className="footer">
            <h1>Footer</h1>
          </div>
        </div>
      
  );
}

export default App;