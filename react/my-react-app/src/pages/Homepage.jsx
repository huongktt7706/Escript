import TourCard from "../components/TourCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Homepage() {
    const tours = [
        {
            id: 1,
            title: 'Đà Nẵng được mệnh danh là “thành phố đáng sống nhất Việt Nam”, nổi tiếng với cảnh quan thiên nhiên đa dạng, con người thân thiện và cơ sở hạ tầng hiện đại. Nơi đây là điểm giao hòa giữa biển – núi – sông – văn hóa, tạo nên một hành trình du lịch vừa năng động vừa thư giãn.',
            image: '/public/danang.jpeg',
            price: '25.000.000đ'
        },
        {
            id: 2,
            title: 'Ninh Bình là một trong những địa điểm du lịch nổi tiếng nhất miền Bắc, được ví như “Hạ Long trên cạn” nhờ sở hữu cảnh quan núi đá vôi, sông nước và hệ sinh thái phong phú. Nơi đây không chỉ đẹp về thiên nhiên mà còn giàu giá trị văn hóa – lịch sử.',
            image: '/public/ninhbinh.jpeg',

            price: '32.000.000đ'
        },
        {
            id: 3,
            title: 'Quy Nhơn là thành phố biển nổi bật của miền Trung, được mệnh danh là “Maldives Việt Nam” nhờ những bãi biển trong xanh, thiên nhiên hoang sơ và không gian yên bình. Đây là điểm đến lý tưởng cho những ai muốn nghỉ dưỡng, khám phá và tận hưởng vẻ đẹp tự nhiên.',
            image: '/public/quynhon.jpeg',

            
            price: '28.000.000đ'
        },
        {
            id: 4,
            title: 'Đà Lạt – thành phố ngàn hoa – là một trong những điểm du lịch nổi tiếng nhất Việt Nam, nằm trên cao nguyên Lâm Viên với khí hậu mát mẻ quanh năm. Không ồn ào hay náo nhiệt, Đà Lạt mang vẻ đẹp lãng mạn, bình yên và đầy chất thơ.',
            image: '/public/dalat.jpeg',
            price: '30.000.000đ'
        },
        {
            id: 5,
            title: 'Hà Giang là điểm đến nổi bật nhất vùng Đông Bắc, nổi tiếng với những dãy núi đá hùng vĩ, con đèo hiểm trở và văn hóa độc đáo của các dân tộc miền núi. Đây là nơi dành cho những ai yêu thiên nhiên, thích khám phá và muốn trải nghiệm vẻ đẹp hoang sơ của Việt Nam.',
            image: '/public/hagiang.jpeg',
            
            price: '27.000.000đ'
        },
        {
            id: 6,
            title: 'Hòa Bình là cửa ngõ vùng Tây Bắc, nổi tiếng với thiên nhiên tươi đẹp, văn hóa các dân tộc phong phú và nhiều điểm tham quan sinh thái – lịch sử hấp dẫn. Đây là nơi du khách có thể tạm rời xa nhịp sống đô thị để tận hưởng không gian yên bình giữa núi rừng.',
            image: '/public/hoabinh.jpeg',
            price: '29.000.000đ'
        },
        {
            id: 7,
            title: 'Nha Trang là một trong những thành phố biển đẹp nhất Việt Nam, nổi tiếng với biển xanh, cát trắng, khí hậu ôn hòa và hệ sinh thái biển phong phú. Được mệnh danh là “Hòn ngọc của biển Đông”, Nha Trang thu hút hàng triệu du khách mỗi năm nhờ cảnh đẹp tự nhiên và nhiều hoạt động giải trí hấp dẫn.',
            image: '/public/nhatrang.jpeg',
            price: '35.000.000đ'
        },
        {
            id: 8,
            title: 'Phú Quốc là hòn đảo lớn nhất Việt Nam, nằm ở vùng biển Tây Nam, nổi tiếng với biển xanh, cát trắng, nắng vàng và cảnh quan thiên nhiên hoang sơ. Đây là điểm đến lý tưởng cho du khách muốn nghỉ dưỡng, khám phá biển đảo và trải nghiệm văn hóa miền biển.',
            image: '/public/phuquoc.jpeg',
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
             <section className="py-12 px-4 md:px-16 bg-gray-50">

                <p className="text-center text-gray-600 mt-2 mb-8">
                    Tour đang được giảm giá
                </p>

                <div className="grid  px-4 md:px-16 sm:grid-cols-2 lg:grid-cols-4">
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
             <section className="py-12 px-4 md:px-16 bg-gray-50">

                <p className="text-center text-gray-600 mt-2 mb-8">
                    Hot Trend 2025 . Tuor bán chạy
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

            
            <section className="py-12 text-center bg-beige-800">
                <h2 className="text-3xl font-bold mb-4 text-black">Bạn đã sẵn sàng cho chuyến đi tiếp theo?</h2>
                <p className="mb-6 text-white">Đặt tour ngay hôm nay để nhận nhiều ưu đãi hấp dẫn!</p>
                <button className="px-6 py-3 bg-red-800 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 border-4 border-white">
                    Đặt Tour Ngay
                </button>
            </section>

           
            <Footer/>
        </div>
    );
}

export default Homepage;
