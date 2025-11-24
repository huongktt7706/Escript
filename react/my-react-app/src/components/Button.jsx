function Button({ label = 'Default label', children }) {

  const clicktour = () => {
    alert("Bạn đã click vào nút: " + label);
  };

  return (
    <button
      onClick={clicktour}
      className="
        px-4 py-2 
        bg-white-400 
        border-2 border-red-400 
        rounded-2xl 
        text-black 
        font-medium
        transition-all duration-300
        hover:bg-red-500 
        hover:text-white
        hover:border-blue-600
        active:scale-95
      "
    >
      {label}
      {children}
    </button>
  );
}
export default Button;