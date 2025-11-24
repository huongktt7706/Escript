function Banner() {
    return (
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            
            {/* Banner Image */}
            <img
                src="/public/anh banner.jpg"
                alt="Travel Banner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-xl">
                    Khám phá Việt Nam cùng chúng tôi
                </h1>
                <p className="mt-3 text-lg md:text-2xl font-medium opacity-90">
                    Trải nghiệm những hành trình tuyệt vời & độc đáo
                </p>
            </div>

        </div>
    );
}

export default Banner;
