import React, { useState, useEffect } from 'react'
import { tourAPI } from '../services/api'
import { TourForm } from "../components/TourForm"

export const TourList = ({ onLogout }) => {
    const [tours, setTours] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [search, setSearch] = useState('')
    const user = localStorage.getItem('user')

    useEffect(() => {
        loadTours()
    }, [search])

    const loadTours = async () => {
        try {
            const result = await tourAPI.getTours({ search })
            setTours(result.data)
        } catch (error) {
            console.log('Lỗi tải tour')
        }
    }

    const handleSave = async (tourData) => {
        try {
            if (editingId) {
                await tourAPI.updateTour(editingId, tourData)
                alert('Cập nhật thành công')
            } else {
                await tourAPI.createTour(tourData)
                alert('Thêm tour thành công')
            }
            setShowForm(false)
            setEditingId(null)
            loadTours()
        } catch (error) {
            alert('Lỗi: ' + error.message)
        }
    }

    const handleDelete = async (tour) => {
        if (!window.confirm(`Bạn chắc chắn xóa tour "${tour.name}"?`)) return
        try {
            const result = await tourAPI.deleteTour(tour.id)
            if (result.success) {
                alert('Xóa thành công')
                loadTours()
            }
        } catch (error) {
            alert('Lỗi: ' + (error?.message || 'Không thể xóa tour'))
            console.error(error)
        }
    }

    const getTourById = (id) => tours.find(t => t.id === id)

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                    <h1>Quản Lý Tour</h1>
                    <small style={{ color: '#666' }}>Email: {user}</small>
                </div>
                <button className="btn-secondary" onClick={onLogout}>Đăng Xuất</button>
            </div>

            {showForm && (
                <>
                    <TourForm
                        tour={editingId ? getTourById(editingId) : null}
                        onSave={handleSave}
                        onCancel={() => {
                            setShowForm(false)
                            setEditingId(null)
                        }}
                    />
                    <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ddd' }} />
                </>
            )}

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Tìm kiếm tour..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                {!showForm && (
                    <button className="btn-primary" onClick={() => setShowForm(true)}>
                        + Thêm Tour
                    </button>
                )}
            </div>

            {tours.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Tên Tour</th>
                            <th>Danh Mục</th>
                            <th>Giá (VNĐ)</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tours.map(tour => (
                            <tr key={tour.id}>
                                <td><strong>{tour.name}</strong></td>
                                <td>{tour.category}</td>
                                <td>{tour.price.toLocaleString()}</td>
                                <td>
                                    <span className={`badge ${tour.active ? 'badge-active' : 'badge-inactive'}`}>
                                        {tour.active ? 'Hoạt động' : 'Vô hiệu'}
                                    </span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <button
                                            className="btn-primary"
                                            onClick={() => {
                                                setEditingId(tour.id)
                                                setShowForm(true)
                                            }}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            className="btn-danger"
                                            onClick={() => handleDelete(tour)}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '4px', color: '#999' }}>
                    Không có tour nào
                </div>
            )}
        </div>
    )
}
