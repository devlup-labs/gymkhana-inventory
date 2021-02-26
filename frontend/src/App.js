import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/index";
import ItemPage from "./components/pages/ItemPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Itemname">
        <ItemPage />
      </div>
    </div>
  );
}

export default App;
