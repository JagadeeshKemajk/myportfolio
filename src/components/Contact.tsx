import { portfolioData } from '@/data/portfolioData'

export default function Contact() {
  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-4 text-slate-900'>
          Get In Touch
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16'></div>

        <div className='bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 rounded-lg shadow-xl'>
          <p className='text-lg text-center mb-12 text-gray-300'>
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12'>
            {/* Email */}
            <a
              href={`mailto:${portfolioData.email}`}
              className='flex items-center gap-4 p-4 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors'
            >
              <div className='p-3 bg-blue-500 text-white rounded-full'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div>
                <p className='text-sm text-gray-300'>Email</p>
                <p className='font-semibold'>{portfolioData.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.phone}`}
              className='flex items-center gap-4 p-4 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors'
            >
              <div className='p-3 bg-blue-500 text-white rounded-full'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <div>
                <p className='text-sm text-gray-300'>Phone</p>
                <p className='font-semibold'>{portfolioData.phone}</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className='border-t border-slate-600 pt-8'>
            <p className='text-center text-gray-300 mb-6'>Follow me on social media</p>
            <div className='flex justify-center gap-4'>
              <a
                href={portfolioData.github}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors'
                title='GitHub'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
              <a
                href={portfolioData.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors'
                title='LinkedIn'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.111 0-1.773.748-2.067 1.472-.106.291-.133.697-.133 1.104v5.222h-3.554s.048-8.733 0-9.648h3.554v1.364c.427-.659 1.19-1.595 2.89-1.595 2.111 0 3.691 1.379 3.691 4.345v5.534zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.962.768-1.707 1.958-1.707 1.188 0 1.914.755 1.938 1.707 0 .95-.75 1.708-1.981 1.708zm1.582 11.019H3.715V9.804h3.204v10.648zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
                </svg>
              </a>
              <a
                href={portfolioData.hackerrank}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors'
                title='HackerRank'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z' />
                </svg>
              </a>
              <a
                href={portfolioData.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-slate-700 hover:bg-blue-600 rounded-full transition-colors'
                title='Instagram'
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z' />
                  <path d='M5.848 12a6.152 6.152 0 1 1 12.304 0 6.152 6.152 0 0 1-12.304 0zm1.393 0a4.759 4.759 0 1 0 9.518 0 4.759 4.759 0 0 0-9.518 0z' />
                  <circle cx='18.868' cy='5.382' r='1.438' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center'>
          <p className='text-gray-700'>
            💙 Made with passion by <strong>Jagadeesh Kema</strong>
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  )
}
