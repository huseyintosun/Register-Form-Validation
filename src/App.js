import './App.css';
import Register from "./pages/Register"
import SimpleRegister from "./pages/SimpleRegister"
import SimpleRegisterwithComp from "./pages/SimpleRegisterwithComp"

function App() {
  return (
    <div className="App">
      {/* <SimpleRegister/> */}
      {/* <Register/> */}
      <SimpleRegisterwithComp/>
    </div>
  );
}

export default App;
