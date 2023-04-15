import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";
import { Background } from "react-parallax";

const HotelProperties = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {hotelsData.slice(0, 12).map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/hotel/hotel-single-v1/${item.id}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content ">
                        <Image
                          width={300}
                          height={300}
                          className="rounded-4 col-12 js-lazy"
                          src={slide}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${isTextMatched(item?.tag, "breakfast included")
                      ? "bg-dark-1 text-white"
                      : ""
                      } ${isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                      } 
                    } ${isTextMatched(item?.tag, "-25% today")
                        ? "bg-brown-1 text-white"
                        : ""
                      } 
                     ${isTextMatched(item?.tag, "top rated")
                        ? "bg-yellow-1 text-dark-1"
                        : ""
                      }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content " style={{ marginTop: "-58px" }}>
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <div className="fw-500">
                  AED{" "}
                  <span className="text-blue-1">{item?.price}</span>
                  &nbsp;
                  <span className="text-blue-1">{item?.month}</span>
                </div>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.location}
              </p>

              <p className="text-light-1 lh-14 text-14 mt-5 icon-calendar-2">
                &nbsp; {item?.year}
                &nbsp;  &nbsp; &nbsp;
                {/* <div className="icon-compass "> */}
                {item?.numberOfReviews}km
                {/* </div> */}

              </p>








              <div className="d-flex items-center mt-20">
                <div className="flex-center icon-location bg-secondary rounded-2 size-30 text-18 fw-600 text-white">
                  {/* {item?.ratings} */}
                </div>
                <div className="text-14 text-light-1 fw-500 ml-10">
                  AI quoz,Dubai
                </div>
                {/* <div className="text-14 text-light-1 ml-10 ">
                  {item?.numberOfReviews} km
                </div> */}
              </div>
              <div className="mt-20">
                <div className="fw-500 justify-between  " style={{
                  display: "flex", justifyContent: "space-between", background: '#FAFAFA',
                  border: '0.834194px', solid: '#000000',
                  borderRadius: '5.00516px'}}>

                <button type="button" class="btn  btn-lg "> <img src="/img/ourimage/phones.svg" class="img-thumbnail" alt="..." /> Call  </button>
                <button type="button" class="btn  btn-lg  "> <img src="/img/ourimage/chats.svg" class="img-thumbnail" alt="..." /> chat </button>


                {/* <span className="text-blue-1">{item?.price}</span>
                  &nbsp;
                  <span className="text-blue-1">{item?.month}</span> */}
              </div>
            </div>
        </div>
          </Link >
        </div >
      ))}
    </>
  );
};

export default HotelProperties;







