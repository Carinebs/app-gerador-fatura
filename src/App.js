import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GerenciarClientes from './views/GerenciarFaturas'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<GerenciarClientes/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
