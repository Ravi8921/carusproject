const AmenitiesFilter = () => {
  const amenities = [
    { name: "Navigation", count: 92 },
    { name: "Sun Roof", count: 45 },
    { name: "7 Seaters ", count: 21 },
    { name: "Reversing Camera", count: 679 },
    { name: " Leather Seats", count: 78 },
    { name: "GCC Specification ", count: 78 },
    { name: " Parking Sensors", count: 78 },
    { name: "Service Contract ", count: 78 },
  ];

  return (
    <>
      {amenities.map((amenity, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              {/* <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div> */}
            <button type="button" class="btn btn-outline-danger">{amenity.name}</button>
            </div>
          </div>
          {/* <div className="col-auto">
            <div className="text-15 text-light-1">{amenity.count}</div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default AmenitiesFilter;
