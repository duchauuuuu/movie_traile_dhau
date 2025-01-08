import { useState } from "react";
import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/doona_xinh.png";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  const [isTrailerOpen, setTrailerOpen] = useState(false); // Quản lý trạng thái mở trailer

 

  const handlePlayTrailer = () => {
    setTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setTrailerOpen(false);
  };

  return (
    <>
      <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
        <div className="w-full h-full bg-black/40 " />
        <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
          <div className="md:w-[50%] w-full ">
            <div className="flex flex-col space-y-6 items-start p-10">
              <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6">
                TV SHOW
              </p>
              <div className="flex flex-col space-y-4">
                <h1 className="text-[40px] font-bold text-white ">Doona!</h1>
                <div className="flex items-center space-x-3">
                  <img src={IconRating} alt="rating" className="w-8 h-8" />
                  <img src={IconRating} alt="rating" className="w-8 h-8" />
                  <img src={IconRating} alt="rating" className="w-8 h-8" />
                  <img src={IconRating} alt="rating" className="w-8 h-8" />
                  <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                </div>
                <p className="text-white">
                  Một sinh viên đại học tên Won-jun trở thành bạn cùng phòng với
                  Doo-na - một thần tượng K-pop đã giải nghệ, cô đã bỏ lại những
                  tháng ngày hào nhoáng của mình trở về sống trong một ngôi nhà
                  chung
                </p>
              </div>

              <div className="flex items-center space-x-5">
                <button className="py-2 px-3 bg-black text-white border border-black font-bold">
                  Chi tiết
                </button>
                <button
                  className="py-2 px-3 bg-red-600 text-white font-bold"
                  onClick={handlePlayTrailer}
                >
                  Xem Phim
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-full flex items-center justify-center">
            <div className="w-[300px] h-[400px] relative group">
              <button
                className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                onClick={handlePlayTrailer}
              >
                <img src={IconPlay} alt="play" className="w-16 h-16" />
              </button>
              <img
                src={ImgMovie}
                alt="banner"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {isTrailerOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[80%] h-[80%]">
            <iframe
              src="https://www.youtube.com/embed/v4rtx48siJI?si=AMcn8F9hET4KDHs_"
              title="Trailer"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded"
              onClick={handleCloseTrailer}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
