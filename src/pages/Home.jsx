import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {

    return (

        <div className='min-h-screen bg-[#020617] text-white overflow-hidden'>

            {/* NAVBAR */}

            <Navbar />

            {/* HERO SECTION */}

            <section className='max-w-7xl mx-auto px-6 py-20'>

                <div className='grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]'>

                    {/* LEFT SIDE */}

                    <div className='max-w-2xl'>

                        <div className='inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-medium mb-8'>

                            ✨ AI Powered Resume Intelligence

                        </div>

                        <h1 className='text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight font-[Poppins]'>

                            Build
                            <span className='text-cyan-400'> Strong Resumes </span>
                            Faster With AI

                        </h1>

                        <p className='mt-8 text-lg text-slate-400 leading-8 max-w-xl'>

                            Analyze resumes using ATS scoring,
                            AI-powered feedback, intelligent suggestions,
                            and smart skill matching.

                        </p>

                        {/* BUTTONS */}

                        <div className='flex flex-wrap gap-5 mt-10'>

                            <Link to='/analyzer'>

                                <button className='bg-cyan-500 hover:bg-cyan-400 px-7 py-4 rounded-xl text-black text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20'>

                                    Start Analysis

                                </button>

                            </Link>

                            <Link to='/about'>

                                <button className='border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/5 px-7 py-4 rounded-xl text-lg transition duration-300'>

                                    Learn More

                                </button>

                            </Link>

                        </div>

                        {/* STATS */}

                        <div className='flex flex-wrap gap-10 mt-16'>

                            <div>

                                <h2 className='text-3xl font-bold text-cyan-400'>
                                    95%
                                </h2>

                                <p className='text-slate-500 mt-2 text-sm'>
                                    ATS Accuracy
                                </p>

                            </div>

                            <div>

                                <h2 className='text-3xl font-bold text-cyan-400'>
                                    AI
                                </h2>

                                <p className='text-slate-500 mt-2 text-sm'>
                                    Smart Insights
                                </p>

                            </div>

                            <div>

                                <h2 className='text-3xl font-bold text-cyan-400'>
                                    Fast
                                </h2>

                                <p className='text-slate-500 mt-2 text-sm'>
                                    Resume Analysis
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE CARD */}

                    <div className='relative flex justify-center'>

                        {/* GLOW */}

                        <div className='absolute w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full'></div>

                        {/* CARD */}

                        <div className='relative w-full max-w-[520px] bg-slate-900 border border-slate-800 rounded-[32px] p-8 shadow-2xl'>

                            {/* MOCK RESUME */}

                            <div className='space-y-5'>

                                <div className='bg-slate-700 h-4 rounded-full w-2/3'></div>

                                <div className='bg-slate-700 h-4 rounded-full'></div>

                                <div className='bg-slate-700 h-4 rounded-full w-5/6'></div>

                            </div>

                            {/* ATS BAR */}

                            <div className='mt-10'>

                                <div className='flex justify-between mb-3'>

                                    <p className='text-slate-400 text-sm'>
                                        ATS Optimization
                                    </p>

                                    <p className='text-cyan-400 font-semibold'>
                                        88%
                                    </p>

                                </div>

                                <div className='w-full bg-slate-700 h-4 rounded-full overflow-hidden'>

                                    <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-4 rounded-full w-[88%]'></div>

                                </div>

                            </div>

                            {/* INFO CARDS */}

                            <div className='grid grid-cols-2 gap-4 mt-10'>

                                <div className='bg-green-500/10 border border-green-500/20 p-5 rounded-2xl'>

                                    <h3 className='text-green-400 font-semibold text-lg'>
                                        Skills
                                    </h3>

                                    <p className='text-slate-400 mt-3 text-sm leading-7'>
                                        React, Node.js, MongoDB
                                    </p>

                                </div>

                                <div className='bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-2xl'>

                                    <h3 className='text-yellow-400 font-semibold text-lg'>
                                        Suggestions
                                    </h3>

                                    <p className='text-slate-400 mt-3 text-sm leading-7'>
                                        Improve project descriptions
                                    </p>

                                </div>

                            </div>

                            {/* SCORE */}

                            <div className='mt-8 bg-slate-800 border border-slate-700 p-5 rounded-2xl'>

                                <div className='flex justify-between items-center'>

                                    <div>

                                        <h3 className='text-cyan-400 font-semibold text-lg'>
                                            Resume Score
                                        </h3>

                                        <p className='text-slate-500 text-sm mt-2'>
                                            AI-powered resume quality analysis
                                        </p>

                                    </div>

                                    <h1 className='text-4xl font-bold text-green-400'>
                                        A+
                                    </h1>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FOOTER */}

            <Footer />

        </div>
    )
}

export default Home