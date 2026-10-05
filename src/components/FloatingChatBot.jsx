import { useState } from 'react'

import {
    Bot,
    X,
    Send,
    Plus,
    Minus
} from 'lucide-react'

const FloatingChatBot = () => {

    const [isOpen, setIsOpen] = useState(false)

    // USER CONTROLLED SIZE
    const [chatWidth, setChatWidth] = useState(340)

    const [chatHeight, setChatHeight] = useState(500)

    const [message, setMessage] = useState('')

    const messages = [

        {
            sender: 'ai',
            text: 'Hello! I can help analyze resumes and improve ATS scores.'
        },

        {
            sender: 'user',
            text: 'Can you improve my resume?'
        },

        {
            sender: 'ai',
            text: 'Absolutely. Upload your resume to begin analysis.'
        }
    ]

    // WIDTH CONTROLS

    const increaseWidth = () => {

        setChatWidth((prev) => prev + 20)
    }

    const decreaseWidth = () => {

        if (chatWidth > 280) {

            setChatWidth((prev) => prev - 20)
        }
    }

    // HEIGHT CONTROLS

    const increaseHeight = () => {

        setChatHeight((prev) => prev + 20)
    }

    const decreaseHeight = () => {

        if (chatHeight > 400) {

            setChatHeight((prev) => prev - 20)
        }
    }

    return (

        <div className='fixed bottom-6 right-6 z-50'>

            {/* CHAT WINDOW */}

            {

                isOpen && (

                    <div

                        style={{

                            width: `${chatWidth}px`,
                            height: `${chatHeight}px`
                        }}

                        className='fixed bottom-24 right-6 overflow-hidden rounded-[24px] border border-slate-800 bg-[#081028]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 flex flex-col transition-all duration-300'
                    >

                        {/* HEADER */}

                        <div className='px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0b1220]'>

                            <div className='flex items-center gap-3'>

                                <div className='w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center'>

                                    <Bot className='text-cyan-400 w-5 h-5' />

                                </div>

                                <div>

                                    <h3 className='text-white font-semibold text-base'>

                                        Resume AI

                                    </h3>

                                    <p className='text-slate-400 text-xs'>

                                        Online

                                    </p>

                                </div>

                            </div>

                            <div className='flex items-center gap-2'>

                                {/* WIDTH */}

                                <button

                                    onClick={decreaseWidth}

                                    className='w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center'
                                >

                                    <Minus className='w-4 h-4 text-white' />

                                </button>

                                <button

                                    onClick={increaseWidth}

                                    className='w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center'
                                >

                                    <Plus className='w-4 h-4 text-white' />

                                </button>

                                {/* HEIGHT */}

                                <button

                                    onClick={decreaseHeight}

                                    className='w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center'
                                >

                                    ↓

                                </button>

                                <button

                                    onClick={increaseHeight}

                                    className='w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center'
                                >

                                    ↑

                                </button>

                                {/* CLOSE */}

                                <button

                                    onClick={() => setIsOpen(false)}

                                    className='text-slate-400 hover:text-white transition ml-1'
                                >

                                    <X className='w-5 h-5' />

                                </button>

                            </div>

                        </div>

                        {/* CHAT AREA */}

                        <div className='flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-[#020617]'>

                            {

                                messages.map((msg, index) => (

                                    <div
                                        key={index}
                                        className={`flex ${
                                            msg.sender === 'user'
                                                ? 'justify-end'
                                                : 'justify-start'
                                        }`}
                                    >

                                        <div
                                            className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-7
                                            
                                            ${
                                                msg.sender === 'user'
                                                    ? 'bg-cyan-500 text-black rounded-br-md'
                                                    : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-md'
                                            }`}
                                        >

                                            {msg.text}

                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                        {/* INPUT */}

                        <div className='p-4 border-t border-slate-800 bg-[#081028]'>

                            <div className='flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-2xl px-3 py-2'>

                                <input
                                    type='text'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Ask AI anything...'
                                    className='flex-1 bg-transparent outline-none text-white placeholder:text-slate-500 text-sm px-2'
                                />

                                <button
                                    className='bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20'
                                >

                                    <Send className='text-black w-4 h-4' />

                                </button>

                            </div>

                        </div>

                    </div>
                )
            }

            {/* FLOATING BUTTON */}

            <button

                onClick={() => setIsOpen(!isOpen)}

                className='w-12 h-12 rounded-xl bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105'
            >

                <Bot className='text-black w-5 h-5' />

            </button>

        </div>
    )
}

export default FloatingChatBot