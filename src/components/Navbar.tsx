'use client'

import { portfolioData } from '@/data/portfolioData'
import ResumeModal from './ResumeModal'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            KJ
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className='hover:text-blue-400 transition-colors text-sm font-medium'
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className='hidden md:flex gap-4 items-center'>
            <ResumeModal />
            <a href={portfolioData.github} target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
            <a href={`https://www.linkedin.com/in/${portfolioData.linkedin.split('/').pop()}`} target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-colors'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.111 0-1.773.748-2.067 1.472-.106.291-.133.697-.133 1.104v5.222h-3.554s.048-8.733 0-9.648h3.554v1.364c.427-.659 1.19-1.595 2.89-1.595 2.111 0 3.691 1.379 3.691 4.345v5.534zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.962.768-1.707 1.958-1.707 1.188 0 1.914.755 1.938 1.707 0 .95-.75 1.708-1.981 1.708zm1.582 11.019H3.715V9.804h3.204v10.648zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden pb-4 space-y-2'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className='block w-full text-left px-4 py-2 hover:bg-slate-700 rounded transition-colors'
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
