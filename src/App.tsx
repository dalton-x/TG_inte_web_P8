import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Core/Header/Header'
import Footer from './Components/Core/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import APropos from './Pages/APropos/APropos';
import Logement from './Pages/Logement/Logement';


function App() {

  return (
    <div className="root">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/logement/:idLogement" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
