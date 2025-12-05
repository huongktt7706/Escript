
const mockTours = [
    {
        id: 1,
        name: "Hà Nội - Hạ Long",
        description: "Khám phá vẻ đẹp kỳ bí của Vịnh Hạ Long",
        price: 1500000,
        image: "https://via.placeholder.com/300x200?text=Halong",
        category: "tour nội địa",
        active: true
    },
    {
        id: 2,
        name: "Đà Nẵng - Hội An",
        description: "Tham quan phố cổ Hội An và bãi biển Mỹ Khê",
        price: 2000000,
        image: "https://via.placeholder.com/300x200?text=DaNang",
        category: "tour nội địa",
        active: true
    }
]

let tours = [...mockTours]

export const tourAPI = {
    getTours: (filters = {}) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = tours
                
                if (filters.search) {
                    result = result.filter(t => 
                        t.name.toLowerCase().includes(filters.search.toLowerCase())
                    )
                }
                
                if (filters.category) {
                    result = result.filter(t => t.category === filters.category)
                }
                
                if (filters.status !== undefined) {
                    result = result.filter(t => t.active === filters.status)
                }
                
                resolve({ success: true, data: result })
            }, 300)
        })
    },

    getTourById: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tour = tours.find(t => t.id === id)
                if (tour) {
                    resolve({ success: true, data: tour })
                } else {
                    reject({ success: false, message: "Tour không tìm thấy" })
                }
            }, 200)
        })
    },
    createTour: (tourData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newTour = {
                    ...tourData,
                    id: Math.max(...tours.map(t => t.id), 0) + 1
                }
                tours.push(newTour)
                resolve({ success: true, data: newTour, message: "Thêm tour thành công" })
            }, 300)
        })
    },
    updateTour: (id, tourData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = tours.findIndex(t => t.id === id)
                if (index !== -1) {
                    tours[index] = { ...tours[index], ...tourData }
                    resolve({ success: true, data: tours[index], message: "Cập nhật tour thành công" })
                } else {
                    reject({ success: false, message: "Tour không tìm thấy" })
                }
            }, 300)
        })
    },
    deleteTour: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = tours.findIndex(t => t.id === id)
                if (index !== -1) {
                    const deletedTour = tours.splice(index, 1)
                    resolve({ success: true, message: "Xóa tour thành công", data: deletedTour })
                } else {
                    reject(new Error("Tour không tìm thấy"))
                }
            }, 300)
        })
    }
}

export const authAPI = {
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock authentication
                if (email && password && password.length >= 6) {
                    const token = btoa(`${email}:${password}:${Date.now()}`)
                    resolve({ 
                        success: true, 
                        token, 
                        user: { email, name: "Admin" },
                        message: "Đăng nhập thành công"
                    })
                } else {
                    reject({ success: false, message: "Email hoặc mật khẩu không hợp lệ" })
                }
            }, 500)
        })
    },

    logout: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: "Đăng xuất thành công" })
            }, 300)
        })
    }
}
