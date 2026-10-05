// src/pages/Analyzer.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeUpload from '../components/ResumeUpload'
import API from '../services/api'

const Analyzer = () => {

  const [resume, setResume] = useState(null)

  const [jobDescription, setJobDescription] = useState('')

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  // ================= ANALYZE HANDLER =================

  const analyzeResumeHandler = async () => {

    if (!resume) {
      alert('Please upload resume')
      return
    }

    if (!jobDescription) {
      alert('Please enter job description')
      return
    }

    try {

      setLoading(true)

      const formData = new FormData()

      formData.append('resume', resume)

      formData.append(
        'jobDescription',
        jobDescription
      )

      const response = await fetch(
        `${API.defaults.baseURL}/analyze/upload`,
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (!response.ok) {

        alert(data.message || 'Analysis failed')

        return

      }

      navigate('/dashboard', {
        state: data.data,
      })

    }

    catch (error) {

      console.log(error)

      alert('Server Error')

    }

    finally {

      setLoading(false)

    }

  }

  return (

    <div className='min-h-screen bg-[#020617] text-white overflow-hidden'>

      <Navbar />

      {/* BACKGROUND */}

      <div className='absolute top-32 left-10 w-[260px] h-[260px] bg-cyan-500/10 blur-3xl rounded-full'></div>

      <div className='absolute bottom-20 right-10 w-[260px] h-[260px] bg-blue-500/10 blur-3xl rounded-full'></div>

      <div className='relative max-w-7xl mx-auto px-6 py-10'>

        {/* HERO */}

        <div className='text-center mb-10'>

          <div className='inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-medium mb-5'>

            ✨ AI Powered ATS Intelligence

          </div>

          <h1 className='text-4xl md:text-5xl font-bold font-[Poppins] tracking-tight leading-tight'>

            Resume Analysis

            <span className='text-cyan-400'>
              {' '}Reinvented
            </span>

          </h1>

          <p className='text-slate-400 text-base mt-5 max-w-2xl mx-auto leading-8'>

            Upload your resume and compare it against
            job descriptions with AI-powered ATS scoring.

          </p>

        </div>

        {/* MAIN GRID */}

        <div className='grid lg:grid-cols-2 gap-6 items-stretch'>

          {/* LEFT */}

          <ResumeUpload
            setResume={setResume}
            resume={resume}
          />

          {/* RIGHT */}

          <div className='space-y-5 flex flex-col'>

            {/* JOB DESCRIPTION */}

            <div className='bg-slate-900/90 border border-slate-800 rounded-[28px] p-6 shadow-2xl flex-1'>

              <div className='flex justify-between items-center mb-5'>

                <div>

                  <h2 className='text-2xl font-semibold'>
                    Job Description
                  </h2>

                  <p className='text-slate-500 mt-1 text-sm'>
                    Paste target job role
                  </p>

                </div>

                <div className='w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-xl'>

                  🤖

                </div>

              </div>

              <textarea
                rows='7'
                placeholder='Paste job description here...'
                value={jobDescription}
                onChange={(e) =>
                  setJobDescription(e.target.value)
                }
                className='w-full bg-slate-800 border border-slate-700 rounded-2xl p-5 outline-none text-slate-300 placeholder:text-slate-500 focus:border-cyan-400 transition resize-none'
              />

            </div>

            {/* FEATURE CARDS */}

            <div className='grid grid-cols-3 gap-4'>

              <div className='bg-slate-900 border border-cyan-500/10 p-4 rounded-2xl hover:border-cyan-400/40 transition'>

                <div className='text-2xl mb-3'>
                  ⚡
                </div>

                <h3 className='font-semibold text-cyan-400 text-base'>
                  ATS
                </h3>

                <p className='text-slate-500 text-sm mt-2 leading-6'>
                  Resume optimization
                </p>

              </div>

              <div className='bg-slate-900 border border-green-500/10 p-4 rounded-2xl hover:border-green-400/40 transition'>

                <div className='text-2xl mb-3'>
                  🧠
                </div>

                <h3 className='font-semibold text-green-400 text-base'>
                  AI Skills
                </h3>

                <p className='text-slate-500 text-sm mt-2 leading-6'>
                  Smart extraction
                </p>

              </div>

              <div className='bg-slate-900 border border-yellow-500/10 p-4 rounded-2xl hover:border-yellow-400/40 transition'>

                <div className='text-2xl mb-3'>
                  🚀
                </div>

                <h3 className='font-semibold text-yellow-400 text-base'>
                  Insights
                </h3>

                <p className='text-slate-500 text-sm mt-2 leading-6'>
                  AI suggestions
                </p>

              </div>

            </div>

            {/* BUTTON */}

            <button
              onClick={analyzeResumeHandler}
              disabled={loading}
              className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition duration-300 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-cyan-500/20'
            >

              {loading
                ? 'Analyzing Resume...'
                : 'Analyze Resume'}

            </button>

          </div>

        </div>

      </div>

      <div className='h-16'></div>

      <Footer />

    </div>

  )
}

export default Analyzer
