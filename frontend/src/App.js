import './App.css';
import PrimarySearchAppBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Footer from './components/footer';
import {Observer} from "mobx-react"

function App() {
    return (
        <Observer>
            {()=>{
                return(
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
                )
            }}
        </Observer>
    );
}

export default App;
