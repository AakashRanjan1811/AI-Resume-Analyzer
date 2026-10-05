import { useContext } from 'react'

import { AuthContext } from '../context/authContextObject'

const useAuth = () => {

    return useContext(AuthContext)
}

export default useAuth