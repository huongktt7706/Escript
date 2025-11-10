// 1. mergeArrays
const mergeArrays = (...arrays) => {
  return [].concat(...arrays);
  
};

// 2. Hàm sumAll
const sumAll = (...nums) => {
  return nums.reduce((sum, num) => sum + num, 0);
};

// 3. Hàm createProduct
const createProduct = (product) => {
  const defaultProduct = {
    name: "No name",
    price: 0,
    inStock: true,
  };

  return { ...defaultProduct, ...product };
};
