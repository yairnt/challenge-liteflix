/* eslint-disable react/prop-types */
import { useState } from 'react';

import { AuthProvider } from './AuthContext';

function AppProviderContext({ children }) {
    const [users, setUsers] = useState([{
        message: 'Felicidades por este nuevo proyecto!'
    }])

    return (
        <AuthProvider
            value={{
                users,
                setUsers
            }}
        >
            {children}
        </AuthProvider>
    )
}

export default AppProviderContext;
