import { portfolioData } from '@/data/portfolioData'

export default function Experience() {
  return (
    <section id='experience' className='py-20 bg-slate-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-4 text-slate-900'>
          Professional Experience
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16'></div>

        <div className='space-y-8'>
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className='bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500'>
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-bold text-slate-900'>{exp.title}</h3>
                  <p className='text-lg text-blue-600 font-semibold'>{exp.company}</p>
                </div>
                <span className='text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right whitespace-nowrap'>
                  {exp.duration}
                </span>
              </div>

              {exp.client && (
                <div className='mb-4'>
                  <p className='text-sm text-gray-600'>
                    <strong>Client:</strong> {exp.client}
                  </p>
                  <p className='text-sm text-gray-500 mt-1'>{exp.clientDescription}</p>
                </div>
              )}

              {exp.project && (
                <div className='mb-4'>
                  <p className='text-sm font-semibold text-slate-900'>
                    Project: {exp.project}
                  </p>
                  <p className='text-sm text-gray-600 mt-1'>{exp.projectDescription}</p>
                </div>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <div className='mb-4'>
                  <p className='text-sm font-semibold text-slate-900 mb-2'>Key Highlights:</p>
                  <ul className='space-y-2'>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className='text-sm text-gray-600 flex items-start'>
                        <span className='text-blue-500 mr-3 font-bold'>⚡</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div>
                  <p className='text-sm font-semibold text-slate-900 mb-2'>Roles & Responsibilities:</p>
                  <ul className='space-y-2'>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className='text-sm text-gray-600 flex items-start'>
                        <span className='text-blue-500 mr-3'>•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
