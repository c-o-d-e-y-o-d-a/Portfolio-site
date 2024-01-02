import Image from 'next/image'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
export default function Home() {
  return (
    <main>
      <About/>
      <Skills/>
      <Contact/>
      
    </main>
  )
}
