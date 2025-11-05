// Ví dụ 1: Hoisting với var
console.log(x); // undefined (không báo lỗi)
var x = 5;
console.log(x); // 5

// Ví dụ 2: Hoisting với function
sayHello(); // "Xin chào!" - function hoisting cho phép gọi trước khi khai báo
function sayHello() {
    console.log("Xin chào!");
}

// Ví dụ 3: let và const KHÔNG hoisting như var
try {
    console.log(y); // Lỗi: Cannot access 'y' before initialization
} catch(e) {
    console.log("Lỗi khi truy cập y trước khi khai báo");
}
let y = 10;

// Ví dụ 4: Function Expression không hoisting
try {
    sayGoodbye(); // Lỗi: sayGoodbye is not a function
} catch(e) {
    console.log("Không thể gọi function expression trước khi khai báo");
}
var sayGoodbye = function() {
    console.log("Tạm biệt!");
};