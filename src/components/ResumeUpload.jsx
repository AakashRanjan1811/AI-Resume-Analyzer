const ResumeUpload = ({ setResume, resume }) => {

  const handleChange = (e) => {
    setResume(e.target.files[0])
  }

  return (
    <div className='bg-slate-900 border border-slate-800 rounded-[28px] p-6 shadow-2xl flex flex-col justify-between'>

      <div>

        <div className='flex items-center justify-between mb-6'>

          <h2 className='text-2xl font-semibold'>
            Upload Resume
          </h2>

          <div className='bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm'>
            PDF
          </div>

        </div>

        {/* DROP AREA */}

        <label
          className='border-2 border-dashed border-slate-700 hover:border-cyan-400 transition duration-300 rounded-2xl p-7 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-800/40'
        >

          <div className='w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center text-4xl mb-5'>

            📄

          </div>

          <h3 className='text-xl font-semibold'>
            Drag & Drop Resume
          </h3>

          <p className='text-slate-400 mt-3 max-w-sm leading-7 text-sm'>

            Upload your resume in PDF format
            for AI-powered ATS analysis.

          </p>

          <div className='mt-6 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-medium'>

            Choose File

          </div>

          <input
            type='file'
            accept='.pdf'
            onChange={handleChange}
            hidden
          />

        </label>

        {/* FILE INFO */}

        {resume && (

          <div className='mt-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center justify-between'>

            <div>

              <p className='text-green-400 font-semibold'>
                Resume Uploaded
              </p>

              <p className='text-slate-400 mt-2 text-sm'>
                {resume.name}
              </p>

            </div>

            <div className='text-3xl'>
              ✅
            </div>

          </div>

        )}

      </div>

      {/* FEATURES */}

      <div className='grid grid-cols-3 gap-4 mt-6'>

        <div className='bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center'>

          <h3 className='text-cyan-400 font-semibold'>
            ATS
          </h3>

          <p className='text-slate-500 text-sm mt-2'>
            Score
          </p>

        </div>

        <div className='bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center'>

          <h3 className='text-green-400 font-semibold'>
            AI
          </h3>

          <p className='text-slate-500 text-sm mt-2'>
            Insights
          </p>

        </div>

        <div className='bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center'>

          <h3 className='text-yellow-400 font-semibold'>
            Smart
          </h3>

          <p className='text-slate-500 text-sm mt-2'>
            Skills
          </p>

        </div>

      </div>

    </div>
  )
}

export default ResumeUpload
