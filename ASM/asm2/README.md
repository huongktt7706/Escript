# Tour Management System

Hệ thống quản lý tour du lịch hoàn chỉnh với xác thực người dùng và CRUD operations.

## ✨ Tính Năng

### 1. AUTHENTICATION SYSTEM (2 điểm)
- ✅ Trang Login với form validation
- ✅ Protected Routes - chỉ cho phép truy cập khi đã đăng nhập
- ✅ Lưu token vào localStorage
- ✅ Xử lý logout

### 2. CRUD TOUR MANAGEMENT (6 điểm)
- ✅ Hiển thị danh sách tour trong table
- ✅ Form thêm tour mới với validation đầy đủ
- ✅ Form chỉnh sửa tour (pre-filled data)
- ✅ Xóa tour có confirm dialog
- ✅ Toggle bật/tắt trạng thái active
- ✅ Tìm kiếm theo tên, lọc theo category/status

### 3. CODE QUALITY (2 điểm)
- ✅ Component structure rõ ràng
- ✅ Tách biệt API services
- ✅ Error handling đầy đủ
- ✅ Code sạch, dễ đọc

## 📋 Validation Rules

### Tour Fields
| Trường | Loại | Yêu Cầu | Ghi Chú |
|--------|------|--------|--------|
| Tên Tour | text | required, 5-100 ký tự | Bắt buộc |
| Danh Mục | select | required | tour nội địa \| tour quốc tế |
| Giá | number | required, > 0 | Phải lớn hơn 0 |
| URL Hình Ảnh | URL | required, valid format | Kiểm tra định dạng URL |
| Mô Tả | textarea | required, 10-1000 ký tự | Mô tả chi tiết |
| Trạng Thái | checkbox | default: true | Bật/tắt tour |

## 🚀 Cài Đặt & Chạy

### Prerequisites
- Node.js v16+
- npm hoặc yarn

### Installation
```bash
cd /Users/huongktt/Documents/code/Escript/ASM/asm2
npm install
```

### Development
```bash
npm run dev
```
Ứng dụng sẽ mở tại `http://localhost:3000`

### Build
```bash
npm run build
```

## 📁 Cấu Trúc Project

```
asm2/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── TourForm.jsx
│   │   └── Dialogs.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── TourList.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   ├── api.js
│   │   └── validation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔐 Authentication

### Demo Login
- **Email:** Bất kỳ email nào (ví dụ: admin@example.com)
- **Password:** Bất kỳ (tối thiểu 6 ký tự)

Token được lưu vào localStorage và tự động kích hoạt khi reload trang.

## 🎯 API Services

### tourAPI
- `getTours(filters)` - Lấy danh sách tour với bộ lọc
- `getTourById(id)` - Lấy chi tiết tour
- `createTour(data)` - Tạo tour mới
- `updateTour(id, data)` - Cập nhật tour
- `deleteTour(id)` - Xóa tour

### authAPI
- `login(email, password)` - Đăng nhập
- `logout()` - Đăng xuất

## 🛡️ Error Handling

- Form validation trước khi submit
- Try-catch blocks trong async operations
- User-friendly error messages
- Confirm dialog trước khi xóa

## 🎨 UI/UX

- Gradient header với logo
- Responsive design
- Toggle switch cho trạng thái active
- Badge colors cho category/status
- Alert notifications
- Loading states
- Modal confirm dialog

## 📝 Notes

- Mock API với delay 200-500ms để simulate real API
- Data được lưu trong memory (reset khi refresh)
- Validation rules tuân theo yêu cầu bài tập
- Hỗ trợ search realtime theo tên tour
- Filter theo category và status hoạt động

---

**Tác giả:** Student  
**Ngày:** December 2025
