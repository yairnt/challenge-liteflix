/* eslint-disable react/prop-types */
import { useState } from 'react';

import { AuthProvider } from './AuthContext';

function AppProviderContext({ children }) {
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <AuthProvider
            value={{
                isOpenModal,
                setIsOpenModal
            }}
        >
            {children}
        </AuthProvider>
    )
}

export default AppProviderContext;
