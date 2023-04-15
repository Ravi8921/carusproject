const TopHeaderFilter = () => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            <h1 className="fw-600">Buy Used Car's </h1>

            <h2 className="fw-200 text-secondary">
              Ford Bronco - AI quoz,Dubai
            </h2>
          </div>

          <button type="button" class=" icon-price-label text-18 btn btn-outline-secondary">  Price</button>
          &nbsp;
          <button type="button" class="icon-nearby btn text-18 btn-outline-secondary"> Near me</button>
          &nbsp;
          <button type="button" class="icon-city-2 text-18 btn btn-outline-secondary"> Floor</button>
          &nbsp;
          <button type="button" class=" text-18 btn btn-outline-secondary">More</button>
        </div>
        {/* End .col */}

        <div className="col-auto">

          <div className="row x-gap-20 y-gap-20">





            <div className="col-auto">
              {/* <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14 mr-10" />
                Top picks for your search
              </button> */}


            </div>
            {/* End .col */}

            <div className="col-auto d-none xl:d-block">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#listingSidebar"
                className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
              >
                <i className="icon-up-down text-14 mr-10" />
                Filter
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
