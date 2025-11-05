// Khai báo object student với const
const student = {
    name: "ThuyTien",
    age: 20
}

// In ra thông tin ban đầu
console.log('Ban đầu:', student)

// 1. Thêm thuộc tính grade = "A"
student.grade = "A"

// 2. Thay đổi tuổi thành 21
student.age = 21

// 3. In ra thông tin sau khi thay đổi
console.log('Sau khi thay đổi:', student)

// Thử gán lại student sẽ báo lỗi
try {
    student = { name: "Someone" }
} catch(e) {
    console.log('Lỗi:', e.message)
}