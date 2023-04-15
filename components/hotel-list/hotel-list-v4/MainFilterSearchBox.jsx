import DateSearch from "../common/DateSearch";
import GuestSearch from "../common/GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-3-big  mt-40 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 ">
        <div className="button-grid r">
          {/* <LocationSearch /> */}
          {/* End Location */}

          <div className="searchMenu-date px-10 lg:py-20  sm:px-20 js-form-dd js-calendar">
            <div>
              {/* <h4 className="text-15 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4> */}
              {/* <DateSearch /> */}

                    
<div class="btn-group ">
  <button type="button" class="btn btn-sm btn-white dropdown-toggle rounded-5 bg-white" data-bs-toggle="dropdown" aria-expanded="false">
    Make
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    {/* <li><hr></hr> class="dropdown-divider"></li> */}
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

                  
<div class="btn-group">
  <button type="button" class="btn btn-sm dropdown-toggle rounded-5 bg-white" data-bs-toggle="dropdown" aria-expanded="false">
    Model
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    {/* <li><hr></hr> class="dropdown-divider"></li> */}
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

                  
<div class="btn-group">
  <button type="button" class="btn btn-sm r dropdown-toggle rounded-5 bg-white" data-bs-toggle="dropdown" aria-expanded="false">
    Price
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    {/* <li><hr></hr> class="dropdown-divider"></li> */}
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>


                  
<div class="btn-group">
  <button type="button" class="btn btn-sm bg-white dropdown-toggle rounded-5" data-bs-toggle="dropdown" aria-expanded="false">
    year
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    {/* <li><hr></hr> class="dropdown-divider"></li> */}
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

                  
<div class="btn-group">
  <button type="button" class="btn btn-sm bg-white  dropdown-toggle rounded-5" data-bs-toggle="dropdown" aria-expanded="false">
    City
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    {/* <li><hr></hr> class="dropdown-divider"></li> */}
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>


{/* <button type="button" class="btn btn-primary btn-lg">Search </button> */}
            </div>
          </div>
          {/* End check-in-out */}

          {/* <GuestSearch /> */}
          {/* End guest */}

          <div className="button-item h-full">

 


            <button className="button -dark-1 py-10 h-full col-4 rounded-5 bg-blue-1 text-white btn-sm">
              <i className="text-10 mr-10 " />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
