import { Link } from 'react-router-dom'

const Navbar = () => {

    const userInfo = JSON.parse(

        localStorage.getItem('userInfo')
    )

    const logoutHandler = () => {

        localStorage.removeItem('userInfo')

        window.location.reload()
    }

    return (

        <div className='sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800'>

            <div className='max-w-7xl mx-auto px-6 py-5 flex justify-between items-center'>

                <h1 className='text-3xl font-bold tracking-tight text-cyan-400'>

                    AI Resume Analyzer

                </h1>

                <div className='flex gap-8 items-center text-[17px] font-medium text-slate-300'>

                    <Link
                        to='/'
                        className='hover:text-cyan-400 transition duration-300'
                    >
                        Home
                    </Link>

                    <Link
                        to='/analyzer'
                        className='hover:text-cyan-400 transition duration-300'
                    >
                        Analyzer
                    </Link>

                    <Link
                        to='/dashboard'
                        className='hover:text-cyan-400 transition duration-300'
                    >
                        Dashboard
                    </Link>

                    <Link
                        to='/about'
                        className='hover:text-cyan-400 transition duration-300'
                    >
                        About
                    </Link>

                    <Link
                        to='/contact'
                        className='hover:text-cyan-400 transition duration-300'
                    >
                        Contact
                    </Link>

                    {

                        userInfo ? (

                            <button

                                onClick={logoutHandler}

                                className='bg-red-500 hover:bg-red-400 text-white px-5 py-2 rounded-xl transition'
                            >

                                Logout

                            </button>

                        ) : (

                            <>

                                <Link
                                    to='/login'
                                    className='hover:text-cyan-400 transition duration-300'
                                >

                                    Login

                                </Link>

                                <Link
                                    to='/register'
                                    className='bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-xl transition'
                                >

                                    Register

                                </Link>

                            </>

                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar