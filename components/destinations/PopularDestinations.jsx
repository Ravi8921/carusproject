import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Scrollbar } from "swiper";
import { destinations2 } from "../../data/desinations";

const PopularDestinations = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: ".js-destination-next",
          prevEl: ".js-destination-prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {destinations2.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href="#"
              className="citiesCard -type-1 d-block rounded-4"
              key={item.id}
            >
              <div className="citiesCard__image ratio ratio-3:4">
                <Image
                  width={300}
                  height={400}
                  src={item.img}
                  alt="image"
                  className="js-lazy"
                />
              </div>
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                <div className="citiesCard__bg" />




                <div className="d-inline-block ml-10 ">
                  <button className=" text-30 text-blue-1 -blue-1 size-40 rounded-full shadow-2 " style={{fontFamily:"fantasy"}}>  {item.icon}</button>
                  <button className=" text-30 text-blue-1 -blue-1 size-50 rounded-full shadow-2 "  style={{fontFamily:"serif"}}>  {item.icon1}</button>
                  <button className=" text-30 text-blue-1 -blue-1 size-40 rounded-full shadow-2" style={{fontFamily:"fantasy"}}>  {item.icon2}</button>
                  <button className=" text-5 text-red-1  size-50 " style={{fontFamily:"fantasy"}}>  {item.icon3}</button>
                  {/* <button className="icon-instagram text-15 text-red-2 -blue-1 bg-white size-50 rounded-full shadow-2"></button>

                  <button className="icon-linkedin text-15 text-blue-1   bg-white size-50 rounded-full shadow-2"></button>
                  <button className="icon-star text-15 text-yellow-2  -blue-1 bg-white size-50 rounded-full shadow-2"></button> */}
                </div>

                <div className="citiesCard__bottom">
                  <button className="button col-12 h-80 -blue-1  text-30 text-dark-1">
                    {item.button}
                  </button>
                </div>


                <div className=" m-5">
                  <div className="text-50 text-black">{item.title}</div>
                </div>


      
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button className="section-slider-nav  -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev">
          <i className="icon icon-chevron-left text-12" />
        </button>
        <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next">
          <i className="icon icon-chevron-right text-12" />
        </button>
        <div className="slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar" />
      </div>
    </>
  );
};

export default PopularDestinations;
