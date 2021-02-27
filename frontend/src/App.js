import './App.css';
import PrimarySearchAppBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Footer from './components/footer';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="header">
                    <PrimarySearchAppBar />
                </div>

                <div className="router-div">
                    <Router />
                </div>

                <div className="footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
