export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-14 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Cột 1: Giới thiệu */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Vietravel</h3>
          <p className="text-sm opacity-90 leading-6">
            VTourist là đơn vị cung cấp dịch vụ du lịch lữ hành Quốc tế, chuyên thị trường Mỹ,
            Canada, Châu Âu, Úc, Singapore - Malaysia, Thái Lan và Du lịch MICE.
          </p>
          <h3 className="font-bold text-lg mt-6 mb-2">CÔNG TY CỔ PHẦN DU LỊCH VTOURIST</h3>
          <p className="text-sm opacity-90">Số 459 Trần Hưng Đạo, Phường Cầu Kho, TP.Hồ Chí Minh</p>
          <p className="text-sm opacity-90">Email: info@vtourist.com.vn</p>
          <p className="text-sm opacity-90">Hotline: 0913.114.115</p>
        </div>

        {/* Cột 2: Thông tin liên hệ */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Liên hệ các văn phòng</h3>

          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-1">Hà Nội</h4>
            <p className="text-sm opacity-90">Số 7 Thiền Quang, Hai Bà Trưng</p>
            <p className="text-sm opacity-90">Điện thoại: 0913.113.114</p>
            <p className="text-sm opacity-90">Email: contact@vietravel.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-1">Đà Nẵng</h4>
            <p className="text-sm opacity-90">80 Lê Lợi, P.Hải Châu</p>
            <p className="text-sm opacity-90">Điện thoại: 0913.115.111</p>
            <p className="text-sm opacity-90">Email: contact@vietravel.com</p>
          </div>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Kết nối với chúng tôi</h3>
          <div className="flex justify-center md:justify-start gap-5">
            <a href="https://facebook.com" className="hover:opacity-80 transition-all">
              <img src="/images/faceicon.png" alt="Facebook" className="w-9 h-9 rounded-lg shadow" />
            </a>
            <a href="https://zalo.me" className="hover:opacity-80 transition-all">
              <img src="/images/zaloIcon.jpg" alt="Zalo" className="w-9 h-9 rounded-lg shadow" />
            </a>
            <a href="https://instagram.com" className="hover:opacity-80 transition-all">
              <img src="/images/insIcon.jpg" alt="Instagram" className="w-9 h-9 rounded-lg shadow" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-sm opacity-80 border-t border-white/20 pt-6">
        © 2024 Vietravel. All rights reserved.
      </div>
    </footer>
  );
}
