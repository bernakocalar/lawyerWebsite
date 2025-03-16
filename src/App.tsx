import { Route, Routes } from 'react-router'
import './App.css'
import TeamSection from './components/team'
import NavBar from './components/header'
import AboutPage from './components/about'
import Communication from './components/communication'
import Services from './components/services'
import Footer from './components/footer'
function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={ <AboutPage/>} />
    <Route path="/about.tsx" element={ <AboutPage/>} />
    <Route path="/team.tsx" element={<TeamSection />} />
    <Route path="/communication.tsx" element={<Communication />} />
    <Route path="/services.tsx" element={<Services />} />
  </Routes>
  <Footer/>
  </>
  )
}

export default App
