import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Vui lòng nhập email và mật khẩu')
            return
        }
        if (password.length < 6) {
            setError('Mật khẩu phải ít nhất 6 ký tự')
            return
        }
        // Lưu token vào localStorage
        const token = btoa(`${email}:${password}:${Date.now()}`)
        localStorage.setItem('token', token)
        localStorage.setItem('user', email)
        window.location.href = '/tours'
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f4f8' }}>
            <form onSubmit={handleLogin} style={{ background: 'white', padding: '30px', borderRadius: '4px', width: '300px', border: '1px solid #ddd' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Đăng Nhập</h2>
                
                {error && <div style={{ background: '#fee2e2', color: '#991b1b', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError('')
                        }}
                        placeholder="admin@example.com"
                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError('')
                        }}
                        placeholder="123456"
                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                    Đăng Nhập
                </button>
            </form>
        </div>
    )
}
