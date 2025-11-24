import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </>
  )
}

export default App
