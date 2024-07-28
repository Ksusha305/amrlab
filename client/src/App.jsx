import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MediaQuery from 'react-responsive'
import Sois from './components/Sois';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/sois" element={<Sois/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
