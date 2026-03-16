import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </div>
  )
}
