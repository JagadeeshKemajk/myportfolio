import { portfolioData } from '@/data/portfolioData'
import Image from 'next/image'

export default function Education() {
  return (
    <section id='education' className='py-20 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-4 text-slate-900'>
          Education
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {portfolioData.education.map((edu) => (
            <div
              key={edu.id}
              className='bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all transform hover:scale-105'
            >
              <div className='flex items-start gap-4'>
                {/* Logo */}
                {edu.logo && (
                  <div className='flex-shrink-0'>
                    <img 
                      src={edu.logo} 
                      alt={edu.university}
                      className='w-20 h-20 rounded-lg object-cover'
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-slate-900'>{edu.degree}</h3>
                  <p className='text-blue-600 font-semibold mt-1'>{edu.field}</p>
                  <p className='text-sm text-gray-600 mt-2'>{edu.university}</p>
                  <div className='flex gap-4 mt-3 text-sm'>
                    <span className='text-gray-500'>
                      Graduated: <strong>{edu.duration}</strong>
                    </span>
                    <span className='text-gray-500'>
                      CGPA: <strong className='text-green-600'>{edu.cgpa}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
