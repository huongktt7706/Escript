import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth()

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Đang tải...</div>
    }

    return isAuthenticated ? children : <Navigate to="/login" />
}
