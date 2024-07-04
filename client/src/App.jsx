import Canvas from "./canvas";
import Home from './pages/Home';
import Customaizer from "./pages/Customaizer";
import MediaQuery from 'react-responsive'

function App() {
  return (
    <div>
      <MediaQuery minWidth={300} maxWidth={1100}>
      <main className="app_t transition-all ease-in">
        <Home />
        <Canvas />
        <Customaizer />
      </main>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customaizer />
      </main>
      </MediaQuery>
    </div>
  )
}

export default App
