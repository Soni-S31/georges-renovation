import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import About from './pages/About'
import Renovation from './pages/Renovation'
import ContactForm from './pages/Contact'
import  './utils/style/globalStyle.css'
import Plomberie from './pages/Plomberie'
import Climatisation from './pages/Climatisation'


function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/Renovation" element={<Renovation />} />
            <Route path="/Plomberie" element={<Plomberie />} />
            <Route path="/Climatisation" element={<Climatisation />} />
            <Route path="/Contact" element={<ContactForm />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
          
    </div>
  )
}

export default App
