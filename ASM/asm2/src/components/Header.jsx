import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Header = () => {
    const { user, logout, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <header>
            <div className="container">
                <div className="logo">🏨 Tour Management</div>
                {isAuthenticated && (
                    <nav>
                        <Link to="/tours">Quản lý Tour</Link>
                        <span style={{ color: 'white', marginLeft: '30px' }}>
                            Xin chào: {user?.email}
                        </span>
                        <button 
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Đăng Xuất
                        </button>
                    </nav>
                )}
            </div>
        </header>
    )
}
