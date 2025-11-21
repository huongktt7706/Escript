import Button from "./Button";

function TourCard({ image, title, price }) {
    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden
            w-72 cursor-pointer transform transition-all duration-300
            hover:scale-105 hover:shadow-2xl"
        >
           
            <div className="relative w-full h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-300 hover:brightness-90"
                />

              
                <div
                    className="absolute bottom-2 right-2 bg-blue-600 text-white px-4 py-1 
                    rounded-lg font-bold text-lg shadow-lg transition-all duration-300 hover:bg-blue-700"
                >
                    Giá: {price}
                </div>
            </div>

            
            <div className="p-4">
                <h3 className="font-semibold text-md line-clamp-2">{title}</h3>
            </div>

            
            <div className="px-4 pb-4">
                <div className="flex justify-around">
                    <Button label="Xem chi tiết" />
                    <Button label="Đặt ngay" />
                </div>
            </div>
        </div>
    );
}

export default TourCard;
