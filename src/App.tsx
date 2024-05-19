import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="root">
      <Router>
        <Header />

        <Footer />
      </Router>
    </div>
  )
}

export default App
