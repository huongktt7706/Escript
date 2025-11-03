function createBook(title, author, year, price) {
  const discountKey = "calculateDiscount";
  return {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return ` ${this.title} - ${this.author} (${this.year}), giá: ${this.price.toLocaleString()} VNĐ`;
    },
    [discountKey](discount) {
      const discountedPrice = this.price * (1 - discount / 100);
      return `Giá sau khi giảm ${discount}% là ${discountedPrice.toLocaleString()} VNĐ`;
    }
  };
}

const book = createBook("JavaScript ES6", "Hoadv21", 2025, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
