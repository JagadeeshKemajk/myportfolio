import { portfolioData } from '@/data/portfolioData'

export default function Skills() {
  const skillCategories = Object.entries(portfolioData.skills).map(([key, value]) => ({
    title: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
    skills: value as string[],
  }))

  return (
    <section id='skills' className='py-20 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-4 text-slate-900'>
          Technical Skills
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skillCategories.map((category, index) => (
            <div key={index} className='bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='text-xl font-bold text-slate-900 mb-4'>
                {category.title}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full hover:shadow-md transition-shadow'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
