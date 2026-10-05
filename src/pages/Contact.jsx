import { useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Message Sent Successfully')

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navbar />

      <div className='max-w-5xl mx-auto px-6 py-20'>

        <div className='text-center mb-16'>

          <h1 className='text-6xl md:text-7xl font-extrabold text-cyan-400'>
            Contact Us
          </h1>

          <p className='mt-6 text-xl text-slate-300'>
            Have questions or suggestions? Reach out to us.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-slate-800 border border-slate-700 p-10 rounded-[40px] shadow-2xl'
        >

          <div className='grid md:grid-cols-2 gap-6'>

            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              className='bg-slate-700 p-5 rounded-2xl outline-none'
              required
            />

            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              className='bg-slate-700 p-5 rounded-2xl outline-none'
              required
            />

          </div>

          <textarea
            rows='8'
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            className='w-full bg-slate-700 p-5 rounded-2xl outline-none mt-6'
            required
          />

          <button
            type='submit'
            className='mt-8 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl text-lg font-semibold'
          >
            Send Message
          </button>

        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Contact