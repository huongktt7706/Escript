export default function Header() {
  return (
    <nav className="bg-blue-700 shadow-xl rounded-2xl px-8 py-4 my-6">
      <ul className="flex items-center justify-between text-white font-semibold text-lg">

        {/* Logo */}
        <li className="flex items-center gap-3 cursor-pointer">
          <img
            src="/images/AnhIcon.png"
            alt="Company Logo"
            className="w-[55px] h-auto object-contain drop-shadow-lg"
          />
        </li>

        {/* Menu */}
        <li className="flex items-center gap-8">
          {["Home", "About", "Services", "Booking", "Contact", "Login", "Register"].map((item) => (
            <a
              key={item}
              href="/"
              className="px-3 py-2 rounded-xl transition-all duration-200 
                         hover:bg-blue-300 hover:border hover:border-white"
            >
              {item}
            </a>
          ))}
        </li>

        {/* Search Button */}
        <li>
          <button className="p-2 rounded-full hover:bg-blue-300 transition-all duration-200">
            <img
              src="images/icontimkiem.jpg"
              alt="Search"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </li>

      </ul>
    </nav>
  );
}
