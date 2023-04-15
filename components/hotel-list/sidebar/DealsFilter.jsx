const DealsFilter = () => {
  const dealsData = [
    { label: "Free " },
    { label: "Free" },
    { label: "Free" },
  ];

  return (
    <>
      {dealsData.map((deal, index) => (
        <div className="col-auto" key={index}>
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            {/* <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div> */}

            
<div class="container-fluid mt-3">
 

<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

   
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    {/* <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    /> */}

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    
  </div>
</div>

</div>


            
            {/* <div className="text-15 ml-10">{deal.label}</div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default DealsFilter;
