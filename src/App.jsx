import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
