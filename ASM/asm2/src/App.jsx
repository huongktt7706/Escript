import React, { useState, useEffect } from 'react'
import { Login } from './pages/Login'
import { TourList } from './pages/TourList'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Kiểm tra token khi load app
        const token = localStorage.getItem('token')
        if (token) {
            setIsLoggedIn(true)
        }
        setLoading(false)
    }, [])

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Đang tải...</div>
    }

    if (!isLoggedIn) {
        return <Login onLoginSuccess={() => setIsLoggedIn(true)} />
    }

    return <TourList onLogout={() => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setIsLoggedIn(false)
    }} />
}

export default App
