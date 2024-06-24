import Canvas from "./canvas";
import Home from './pages/Home';
import Customaizer from "./pages/Customaizer";
function App() {
  return (
    <main className="app transition-all ease-in">
       <Home />
       <Canvas />
       <Customaizer />
    </main>
  )
}

export default App
