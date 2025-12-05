import React, { useState } from 'react'

export const ConfirmDialog = ({ title, message, onConfirm, onCancel, isLoading }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <p style={{ margin: '20px 0', color: '#666' }}>{message}</p>
                <div className="modal-actions">
                    <button
                        className="btn-secondary"
                        onClick={onCancel}
                        disabled={isLoading}
                    >
                        Hủy
                    </button>
                    <button
                        className="btn-danger"
                        onClick={onConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Đang xử lý...' : 'Xác Nhận'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Alert = ({ type, message, onClose }) => {
    React.useEffect(() => {
        const timer = setTimeout(onClose, 3000)
        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <div className={`alert alert-${type}`}>
            <span>{type === 'success' ? '✓' : '✗'}</span>
            <span>{message}</span>
        </div>
    )
}
