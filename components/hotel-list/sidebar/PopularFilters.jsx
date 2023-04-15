const popularFilters = () => {
  const filters = [
    { label: "Abu Dhabi ", count: 92 },
    { label: "Dubai", count: 45 },
    { label: "Al Ain", count: 21 },
    { label: "Sharjah ", count: 78 },
    { label: "Ajmari", count: 679 },
  ];

  return (
    <>
      {filters.map((filter, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col">
            <div className="">
             
              {/* <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div> */}

<button type="button" class="btn btn-outline-danger">{filter.label}</button>

              {/* <div className="text-15 ml-10">{filter.label}</div> */}
            </div>
          </div>
          {/* <div className="col-auto">
            <div className="text-15 text-light-1">{filter.count}</div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default popularFilters;
