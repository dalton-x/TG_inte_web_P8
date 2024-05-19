import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  return (
    <div className="root">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
