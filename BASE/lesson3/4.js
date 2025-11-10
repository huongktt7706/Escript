const shoppingCart = (customer, ...products) => {
  return {
    customer,
    products,
    totalItems: products.length,
  };
};
console.log(shoppingCart("Hương", "Áo", "Giày", "Mũ"));
