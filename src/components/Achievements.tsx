import { portfolioData } from '@/data/portfolioData'

export default function Achievements() {
  return (
    <section id='achievements' className='py-20 bg-slate-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-4 text-slate-900'>
          Achievements & Awards
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {portfolioData.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 border-t-4 border-blue-500'
            >
              <div className='flex items-start gap-4'>
                <div className='text-3xl'>🏆</div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-slate-900'>{achievement.title}</h3>
                  <p className='text-gray-600 mt-2'>{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
