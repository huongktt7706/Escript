// Form Validation Utilities
export const validateTour = (data) => {
    const errors = {}

    // Validate name: required, 5-100 chars
    if (!data.name || data.name.trim().length === 0) {
        errors.name = "Tên tour không được để trống"
    } else if (data.name.length < 5) {
        errors.name = "Tên tour phải có ít nhất 5 ký tự"
    } else if (data.name.length > 100) {
        errors.name = "Tên tour không được vượt quá 100 ký tự"
    }

    // Validate category: required, 2-50 chars
    if (!data.category || data.category.trim().length === 0) {
        errors.category = "Danh mục không được để trống"
    }

    // Validate description: required, 10-1000 chars
    if (!data.description || data.description.trim().length === 0) {
        errors.description = "Mô tả không được để trống"
    } else if (data.description.length < 10) {
        errors.description = "Mô tả phải có ít nhất 10 ký tự"
    } else if (data.description.length > 1000) {
        errors.description = "Mô tả không được vượt quá 1000 ký tự"
    }

    // Validate price: required, > 0
    if (!data.price || data.price === "") {
        errors.price = "Giá không được để trống"
    } else if (Number(data.price) <= 0) {
        errors.price = "Giá phải lớn hơn 0"
    }

    // Validate image: required, valid URL
    if (!data.image || data.image.trim().length === 0) {
        errors.image = "URL hình ảnh không được để trống"
    } else if (!isValidUrl(data.image)) {
        errors.image = "URL hình ảnh không hợp lệ"
    }

    return errors
}

export const validateLogin = (email, password) => {
    const errors = {}

    if (!email || email.trim().length === 0) {
        errors.email = "Email không được để trống"
    } else if (!isValidEmail(email)) {
        errors.email = "Email không hợp lệ"
    }

    if (!password || password.length === 0) {
        errors.password = "Mật khẩu không được để trống"
    } else if (password.length < 6) {
        errors.password = "Mật khẩu phải có ít nhất 6 ký tự"
    }

    return errors
}

export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export const isValidUrl = (url) => {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}
