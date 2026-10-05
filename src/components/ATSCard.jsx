const ATSCard = ({ score }) => {

  const getColor = () => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 50) return 'bg-yellow-500'

    return 'bg-red-500'
  }

  return (
    <div className='bg-slate-800 p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold text-cyan-400'>
        ATS Score
      </h2>

      <div className='mt-8'>
        <div className='w-full bg-slate-700 h-7 rounded-full overflow-hidden'>
          <div
            style={{ width: `${score}%` }}
            className={`${getColor()} h-7 transition-all duration-700`}
          />
        </div>

        <p className='text-6xl font-bold mt-8'>
          {score}%
        </p>
      </div>
    </div>
  )
}

export default ATSCard