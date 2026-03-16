'use client'

import { useState } from 'react'

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleView = () => {
    window.open('/resume.pdf', '_blank')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Jagadeesh_Kema_DotNet_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Resume Button */}
      <button
        onClick={() => setIsOpen(true)}
        className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2'
      >
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
        </svg>
        Resume
      </button>

      {/* Modal Background */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Dialog */}
          <div
            className='bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden transform transition-all'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className='bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-white flex items-center gap-2'>
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  Resume
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-white hover:text-gray-200 transition-colors'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className='p-6'>
              <p className='text-gray-600 mb-6 text-center'>
                Choose what you'd like to do with the resume
              </p>

              <div className='space-y-3'>
                {/* View Button */}
                <button
                  onClick={handleView}
                  className='w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                  View Resume
                </button>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className='w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className='bg-gray-50 px-6 py-4 border-t'>
              <button
                onClick={() => setIsOpen(false)}
                className='w-full py-2 px-4 text-gray-700 font-semibold hover:bg-gray-200 rounded-lg transition-colors'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
