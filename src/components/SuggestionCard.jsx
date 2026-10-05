const SuggestionCard = ({ suggestions }) => {
  return (
    <div className='bg-slate-800 p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold text-yellow-400 mb-6'>
        Suggestions
      </h2>

      <div className='space-y-4'>
        {suggestions.map((item, index) => (
          <div
            key={index}
            className='bg-slate-700 p-4 rounded-xl'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuggestionCard