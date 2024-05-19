import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="root">
      <Router>
        <Header/>

      </Router>
    </div>
  )
}

export default App
