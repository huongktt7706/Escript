function createUser(name = "A", age = 18, isAdmin = false) {
  return {
    name,
    age,
    isAdmin,
  };
}
console.log(createUser()); 

console.log(createUser("Hương", 19, true));
