import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Dashboard = () => {

  const location = useLocation()

  const navigate = useNavigate()

  const result = location.state || {

    score: 72,

    matchedSkills: [
      'HTML',
      'CSS',
      'React',
      'Tailwind',
      'Git',
    ],

    missingSkills: [
      'Node',
      'MongoDB',
      'Docker',
      'AWS',
    ],

    suggestions: [
      'Add Docker projects',
      'Learn AWS deployment',
      'Improve resume summary',
    ],

    resumeName: 'resume.pdf',
  }

  return (
    <div className='min-h-screen bg-[#020617] text-white overflow-hidden'>

      <Navbar />

      {/* BACKGROUND */}

      <div className='absolute top-24 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full'></div>

      <div className='absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full'></div>

      <div className='relative max-w-7xl mx-auto px-6 py-12'>

        {/* HERO */}

        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12'>

          <div>

            <div className='inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm mb-5'>

              ✨ AI Resume Insights

            </div>

            <h1 className='text-5xl font-bold leading-tight font-[Poppins]'>

              Resume Analysis
              <span className='text-cyan-400'> Dashboard</span>

            </h1>

            <p className='text-slate-400 mt-5 text-lg'>

              {result.resumeName} analyzed successfully

            </p>

          </div>

          {/* BUTTONS */}

          <div className='flex items-center gap-3'>

            {/* BACK */}

            <button
              onClick={() => navigate(-1)}
              className='flex items-center gap-2 bg-slate-800/70 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300'
            >

              <span className='text-base'>
                ←
              </span>

              <span>
                Back
              </span>

            </button>

            {/* ANALYZE */}

            <button
              onClick={() => navigate('/analyzer')}
              className='flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-cyan-500/20'
            >

              <span className='text-base'>
                ✨
              </span>

              <span>
                Analyze Again
              </span>

            </button>

          </div>

        </div>

        {/* MAIN GRID */}

        <div className='grid lg:grid-cols-[1.1fr_0.9fr] gap-6'>

          {/* ATS CARD */}

          <div className='bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[32px] p-7 shadow-2xl'>

            <div className='flex items-start justify-between'>

              <div>

                <p className='text-slate-500 uppercase tracking-wider text-sm'>

                  ATS Score

                </p>

                <h2 className='text-6xl font-bold text-cyan-400 mt-4'>

                  {result.score}%

                </h2>

              </div>

              <div className='w-20 h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-4xl'>

                ⚡

              </div>

            </div>

            {/* PROGRESS */}

            <div className='mt-8'>

              <div className='w-full h-5 bg-slate-800 rounded-full overflow-hidden'>

                <div
                  style={{
                    width: `${result.score}%`,
                  }}
                  className='h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500'
                />

              </div>

            </div>

            {/* STATS */}

            <div className='grid grid-cols-3 gap-4 mt-8'>

              <div className='bg-slate-800/80 rounded-2xl p-5 text-center border border-slate-700'>

                <h3 className='text-3xl font-bold text-cyan-400'>

                  {result.matchedSkills.length}

                </h3>

                <p className='text-slate-500 text-sm mt-2'>
                  Matched
                </p>

              </div>

              <div className='bg-slate-800/80 rounded-2xl p-5 text-center border border-slate-700'>

                <h3 className='text-3xl font-bold text-red-400'>

                  {result.missingSkills.length}

                </h3>

                <p className='text-slate-500 text-sm mt-2'>
                  Missing
                </p>

              </div>

              <div className='bg-slate-800/80 rounded-2xl p-5 text-center border border-slate-700'>

                <h3 className='text-3xl font-bold text-green-400'>

                  AI

                </h3>

                <p className='text-slate-500 text-sm mt-2'>
                  Insights
                </p>

              </div>

            </div>

          </div>

          {/* SUGGESTIONS */}

          <div className='bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[32px] p-7 shadow-2xl'>

            <div className='flex items-start justify-between mb-8'>

              <div>

                <p className='text-slate-500 uppercase tracking-wider text-sm'>

                  AI Suggestions

                </p>

                <h2 className='text-4xl font-bold text-yellow-400 mt-3'>

                  Improvements

                </h2>

              </div>

              <div className='w-20 h-20 rounded-3xl bg-yellow-500/10 flex items-center justify-center text-4xl'>

                🚀

              </div>

            </div>

            <div className='space-y-4'>

              {result.suggestions.map((item, index) => (

                <div
                  key={index}
                  className='bg-slate-800/70 border border-slate-700 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400/30 transition'
                >

                  <div className='w-11 h-11 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-lg'>

                    ✓

                  </div>

                  <p className='text-slate-300 text-lg'>
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* SKILLS */}

        <div className='grid lg:grid-cols-2 gap-6 mt-6'>

          {/* MATCHED */}

          <div className='bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[32px] p-7 shadow-2xl'>

            <div className='flex items-center justify-between mb-8'>

              <div>

                <p className='text-slate-500 uppercase tracking-wider text-sm'>

                  Matched Skills

                </p>

                <h2 className='text-4xl font-bold text-green-400 mt-3'>

                  Skills Found

                </h2>

              </div>

              <div className='w-5 h-5 rounded-full bg-green-400 shadow-lg shadow-green-400/50'></div>

            </div>

            <div className='flex flex-wrap gap-4'>

              {result.matchedSkills.map((skill, index) => (

                <div
                  key={index}
                  className='bg-green-500/10 border border-green-500/20 text-green-300 px-5 py-3 rounded-full text-sm hover:bg-green-500/20 transition'
                >

                  {skill}

                </div>

              ))}

            </div>

          </div>

          {/* MISSING */}

          <div className='bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[32px] p-7 shadow-2xl'>

            <div className='flex items-center justify-between mb-8'>

              <div>

                <p className='text-slate-500 uppercase tracking-wider text-sm'>

                  Missing Skills

                </p>

                <h2 className='text-4xl font-bold text-red-400 mt-3'>

                  Need Improvement

                </h2>

              </div>

              <div className='w-5 h-5 rounded-full bg-red-400 shadow-lg shadow-red-400/50'></div>

            </div>

            <div className='flex flex-wrap gap-4'>

              {result.missingSkills.map((skill, index) => (

                <div
                  key={index}
                  className='bg-red-500/10 border border-red-500/20 text-red-300 px-5 py-3 rounded-full text-sm hover:bg-red-500/20 transition'
                >

                  {skill}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Dashboard