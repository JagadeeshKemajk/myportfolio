'use client'

import { portfolioData } from '@/data/portfolioData'
import Link from 'next/link'

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById('experience')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center justify-center pt-20'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Name Heading */}
        <div className='mb-8'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4'>
            {portfolioData.name}
          </h1>
          <p className='text-2xl sm:text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-4'>
            {portfolioData.title}
          </p>
        </div>

        {/* Summary */}
        <p className='text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed'>
          {portfolioData.summary}
        </p>

        {/* Contact Info */}
        <div className='flex flex-col sm:flex-row justify-center gap-6 mb-12'>
          <a href={`mailto:${portfolioData.email}`} className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
            Get In Touch
          </a>
          <a href={`tel:${portfolioData.phone}`} className='inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            {portfolioData.phone}
          </a>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-6 mb-16'>
          <a href={portfolioData.github} target='_blank' rel='noopener noreferrer' className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors' title='GitHub'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
          <a href={portfolioData.linkedin} target='_blank' rel='noopener noreferrer' className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors' title='LinkedIn'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.111 0-1.773.748-2.067 1.472-.106.291-.133.697-.133 1.104v5.222h-3.554s.048-8.733 0-9.648h3.554v1.364c.427-.659 1.19-1.595 2.89-1.595 2.111 0 3.691 1.379 3.691 4.345v5.534zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.962.768-1.707 1.958-1.707 1.188 0 1.914.755 1.938 1.707 0 .95-.75 1.708-1.981 1.708zm1.582 11.019H3.715V9.804h3.204v10.648zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
            </svg>
          </a>
          <a href={portfolioData.hackerrank} target='_blank' rel='noopener noreferrer' className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors' title='HackerRank'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z' />
            </svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className='inline-block'>
          <button
            onClick={handleScroll}
            className='px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105'
          >
            Explore My Work ↓
          </button>
        </div>
      </div>
    </section>
  )
}
