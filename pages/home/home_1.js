import dynamic from "next/dynamic";
import AddBanner from "../../components/add-banner/AddBanner";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import Blog from "../../components/blog/Blog3";
import CallToActions from "../../components/common/CallToActions";
import Destinations from "../../components/home/home-1/Destinations";
import Testimonial from "../../components/home/home-1/Testimonial";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import Hotels from "../../components/hotels/Hotels";
import SelectFilter from "../../components/hotels/filter-tabs/SelectFilter";
// import Allcar from "../../data/allcar";

const Home_1 = () => {
  return (
    <>
      <Seo pageTitle="Home-1" />
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{display:"flex",justifyContent:"space-evenly"}}>
            <a class="navbar-brand  text-danger" href="#">
            Services
            </a>
            <a class="navbar-brand  text-danger" href="#">
            Buy/Sell Cars
            </a>
            <a class="navbar-brand  text-danger" href="#">
            Parts & Accessories
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            
          </nav>


          <div className="row y-gap-20 justify-between items-end ">
            <div className="col-auto">
              <div className="sectionTitle -md "style={{fontFamily:"Roboto",fontWeight: "700",fontSize:"96px",lineHeight:"87px"}}>
                <div className="sectionTitle__text  mt-5 sm:mt-0 text-danger ">
                  EXPERIENCE{" "}
                </div>
                <div className=" sectionTitle__text mt-5 sm:mt-0 text-danger">
                  UNPARALLELED
                </div>
                <div className=" sectionTitle__text mt-5 sm:mt-0 text-danger">
                  AUTOMOTIVE SERVICES
                </div>
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">

          


              
              {/* <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Destinations
                <div className="icon-arrow-top-right ml-15" />
              </a> */}
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40  sm:pt-20"style={{fontFamily:"Roboto",fontWeight: "1000",fontSize:"96px",lineHeight:"87px",marginTop:"485px",marginBottom:"80px"}}>
            <div className="sectionTitle__text  mt-5 sm:mt-0 text-danger ">
              YOU PUT THE ‘US’{" "}
            </div>
            <div className=" sectionTitle__text mt-5 sm:mt-0 text-danger">
              IN CARS’R’US
            </div>

           
          </div>
          <PopularDestinations />
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
       
      </section> */}
      {/* End AddBanner */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-auto">
              <SelectFilter />
            </div>
          </div>
          End .row

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            <Hotels />
          </div>
          End relative
        </div>
      </section> */}
      {/* Recommended Properties */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section> */}
      {/* Block Guide Section */}
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  BEST OFFERS IN THE MARKET
                </p>

                <h2 className="sectionTitle__title">ALL CARS EVERYTHING</h2>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <section className="layout-pt-lg layout-pb-lg ">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      {/* End Destination we love Section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
