import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {

  // const fruits = ["banana", "apple", "peach"];

  // console.log(fruits[2]);
  let timeout;
  function myFunction() {
     timeout = setTimeout(alertFunc, 2000);
  }
  function alertFunc() {
     alert("Hello User... Start Learning now!");
  }

  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/homebackground.png" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white "
                data-aos="fade-up"
              >

              </h1>
              {/* <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
              Dubai
              </p> */}

              {/* End hero title */}


              <h1 class="jt --debug frontcity">
                <span class="jt__row">
                  <span class="jt__text">Dubai</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">Dubai</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">Dubai</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text" >Dubai</span>
                </span>
              </h1>




            </div>
            <div
              className="tabs -underline mt-60 js-tabs "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
