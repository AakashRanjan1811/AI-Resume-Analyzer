import AppRoutes from './routes/AppRoutes'

import FloatingChatBot from './components/FloatingChatBot'

function App() {

    return (

        <div className='min-h-screen bg-[#020617] text-white overflow-x-hidden'>

            {/* ROUTES */}

            <AppRoutes />

            {/* GLOBAL CHATBOT */}

            <FloatingChatBot />

        </div>
    )
}

export default App