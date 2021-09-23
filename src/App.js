import "./App.css";
import AddStock from "./Components/AddStock";
import RemoveStock from "./Components/RemoveStock";
import StockLevels from "./Components/StockLevels";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddStock />
      <hr />
      <RemoveStock />
      <hr />
      <StockLevels />
    </div>
  );
}

export default App;
