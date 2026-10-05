const SkillCard = ({ title, skills, color }) => {
  return (
    <div className='bg-slate-800 p-6 rounded-2xl shadow-lg'>
      <h2 className={`text-2xl font-bold mb-6 ${color}`}>
        {title}
      </h2>

      <div className='flex flex-wrap gap-3'>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div
              key={index}
              className='bg-slate-700 px-4 py-2 rounded-full'
            >
              {skill}
            </div>
          ))
        ) : (
          <p>No skills found</p>
        )}
      </div>
    </div>
  )
}

export default SkillCard