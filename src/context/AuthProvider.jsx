/* eslint-disable react/prop-types */
import { useState } from 'react';

import { AuthProvider } from './AuthContext';

function AppProviderContext({ children }) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [allMovies, setAllMovies] = useState([])

    return (
        <AuthProvider
            value={{
                isOpenModal,
                setIsOpenModal,
                allMovies,
                setAllMovies
            }}
        >
            {children}
        </AuthProvider>
    )
}

export default AppProviderContext;
