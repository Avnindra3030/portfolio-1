import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import { useFadeInOnScroll } from './useFadeInOnScroll'

function App() {
  const [count, setCount] = useState(0)
  const homeRef = useFadeInOnScroll()
  const aboutRef = useFadeInOnScroll()
  const skillsRef = useFadeInOnScroll()
  const projectsRef = useFadeInOnScroll()
  const resumeRef = useFadeInOnScroll()
  const contactRef = useFadeInOnScroll()

  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <section id="home" ref={homeRef} className="py-24 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-800"><Home /></section>
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"><About /></section>
      <section id="skills" ref={skillsRef} className="py-20 bg-blue-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800"><Skills /></section>
      <section id="projects" ref={projectsRef} className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"><Projects /></section>
      <section id="resume" ref={resumeRef} className="py-20 bg-blue-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800"><Resume /></section>
      <section id="contact" ref={contactRef} className="py-20 bg-gray-50 dark:bg-gray-900"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App
