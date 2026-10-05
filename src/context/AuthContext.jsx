import { useMemo, useState } from 'react'

import { AuthContext } from './authContextObject'

const AuthProvider = ({ children }) => {

    const storedUser = localStorage.getItem('user')

    const [user, setUser] = useState(
        storedUser ? JSON.parse(storedUser) : null
    )

    const login = (userData) => {

        setUser(userData)

        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {

        setUser(null)

        localStorage.removeItem('user')
    }

    const value = useMemo(() => ({
        user,
        login,
        logout,
    }), [user])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider