import TourCard from "../components/TourCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Homepage() {
    const tours = [
        {
            id: 1,
            title: 'Tour du lich London 6 ngay 5 dem - kham pha ve dep cua dat nuoc Anh Quoc den thanh pho Manchester va London',
            price: '25.000.000đ'
        },
        {
            id: 2,
            title: 'Tour du lich nuoc Italia 7 ngay 6 dem - kham pha ve dep cua dat nuoc va con nguoi Italia thanh pho Rome va Venice',
            price: '32.000.000đ'
        },
        {
            id: 3,
            title: 'Tour du lich nuoc Thuy Si 5 ngay 4 dem - kham pha ve dep cua Zyric thien nhien va con nguoi Thuy Si',
            
            price: '28.000.000đ'
        },
        {
            id: 4,
            title: 'Tour du lich nuoc Ha Lan 7 ngay 6 dem - kham pha ve dep cua dat nuoc va con nguoi Ha Lan ',
            
            price: '30.000.000đ'
        },
        {
            id: 5,
            title: 'Tour du lich nuoc Phap 6 ngay 5 dem - kham pha ve dep cua dat nuoc Phap va ngam Khai Hoan Mon',
            
            price: '27.000.000đ'
        },
        {
            id: 6,
            title: 'Tour du lich nuoc Duc 5 ngay 4 dem - kham pha ve dep cua dat nuoc va con nguoi Duc thanh pho Berlin va Munich',
            
            price: '29.000.000đ'
        },
        {
            id: 7,
            title: 'Tour du lich nuoc Nhat Ban 6 ngay 5 dem - kham pha ve dep cua dat nuoc va con nguoi Nhat Ban thanh pho Tokyo va Kyoto',
            
            price: '35.000.000đ'
        },
        {
            id: 8,
            title: 'Tour du lich nuoc Han Quoc 5 ngay 4 dem - kham pha ve dep cua dat nuoc va con nguoi Han Quoc thanh pho Seoul va Busan',
            
            price: '33.000.000đ'
        }
    ];

    return (
        <div className="App font-sans text-gray-800">
            
            <Header/>
                <Banner/>
            <section className="py-12 px-4 md:px-16 bg-gray-50">

                <p className="text-center text-gray-600 mt-2 mb-8">
                    Tận hưởng trải nghiệm du lịch tuyệt vời cùng các tour được lựa chọn kỹ lưỡng.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {tours.map(tour => (
                        <TourCard
key={tour.id} 
                            image={tour.image} 
                            title={tour.title}
                            price={tour.price}
                        />
                    ))}
                </div>
            </section>

            
            <section className="py-12 text-center bg-blue-800">
                <h2 className="text-3xl font-bold mb-4 text-white">Bạn đã sẵn sàng cho chuyến đi tiếp theo?</h2>
                <p className="mb-6 text-white">Đặt tour ngay hôm nay để nhận nhiều ưu đãi hấp dẫn!</p>
                <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition-all duration-300 border-4 border-white">
                    Đặt Tour Ngay
                </button>
            </section>

           
            <Footer/>
        </div>
    );
}

export default Homepage;
