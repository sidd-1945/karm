import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickActions from './components/QuickActions'
import About from './components/About'
import Causes from './components/Causes'
import Projects from './components/Projects'
import Impact from './components/Impact'
import Donation from './components/Donation'
import GetInvolved from './components/GetInvolved'
import Gallery from './components/Gallery'
import Updates from './components/Updates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <QuickActions />
        <About />
        <Causes />
        <Projects />
        <Impact />
        <Donation />
        <GetInvolved />
        <Gallery />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
