import React, { useState, useEffect } from 'react'
import { validateTour } from '../services/validation'

export const TourForm = ({ tour, onSave, onCancel, loading }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: 'tour nội địa',
        description: '',
        price: '',
        image: '',
        active: true
    })
    const [errors, setErrors] = useState({})
    const [imagePreview, setImagePreview] = useState('')

    useEffect(() => {
        if (tour) {
            setFormData(tour)
            setImagePreview(tour.image)
        }
    }, [tour])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
        setErrors({ ...errors, [name]: '' })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result })
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
            setErrors({ ...errors, image: '' })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Validation đơn giản
        const newErrors = {}
        if (!formData.name || formData.name.length < 5) {
            newErrors.name = 'Tên tour phải ít nhất 5 ký tự'
        }
        if (!formData.category) {
            newErrors.category = 'Vui lòng chọn danh mục'
        }
        if (!formData.description || formData.description.length < 10) {
            newErrors.description = 'Mô tả phải ít nhất 10 ký tự'
        }
        if (!formData.price || formData.price <= 0) {
            newErrors.price = 'Giá phải lớn hơn 0'
        }
        if (!formData.image) {
            newErrors.image = 'Vui lòng chọn hình ảnh'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        onSave(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '20px' }}>
                {tour ? 'Chỉnh Sửa Tour' : 'Thêm Tour Mới'}
            </h2>

            <div className="form-row">
                <div className="form-group">
                    <label>Tên Tour *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập tên tour"
                    />
                    {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>

                <div className="form-group">
                    <label>Danh Mục *</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="tour nội địa">Tour Nội Địa</option>
                        <option value="tour quốc tế">Tour Quốc Tế</option>
                    </select>
                    {errors.category && <div className="error-msg">{errors.category}</div>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Giá (VNĐ) *</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Nhập giá tour"
                        min="0"
                    />
                    {errors.price && <div className="error-msg">{errors.price}</div>}
                </div>

                <div className="form-group">
                    <label>Hình Ảnh *</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {errors.image && <div className="error-msg">{errors.image}</div>}
                </div>
            </div>

            {imagePreview && (
                <div className="form-group">
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px', borderRadius: '4px', marginBottom: '10px' }} />
                </div>
            )}

            <div className="form-group">
                <label>Mô Tả *</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Nhập mô tả tour"
                />
                {errors.description && <div className="error-msg">{errors.description}</div>}
                <small style={{ color: '#999', marginTop: '5px', display: 'block' }}>
                    {formData.description.length}/1000 ký tự
                </small>
            </div>

            <div className="form-group checkbox-group">
                <input
                    type="checkbox"
                    id="active"
                    name="active"
                    checked={formData.active}
                    onChange={handleChange}
                />
                <label htmlFor="active" style={{ margin: 0 }}>Kích hoạt tour này</label>
            </div>

            <div className="form-actions">
                <button
                    type="button"
                    className="btn-secondary"
                    onClick={onCancel}
                >
                    Hủy
                </button>
                <button
                    type="submit"
                    className="btn-primary"
                >
                    Lưu Tour
                </button>
            </div>
        </form>
    )
}
