const Map = () => {
  return (

    
    <div
      className="flex-center"
      style={{
        // backgroundImage: "url(/img/general/map.png)",
        height: "180px",
      }}
    >

      
      {/* <button
        className="button py-15 px-24  bg-secondary text-dark-1 absolute"
        data-x-click="mapFilter"
      >
       
      Get finance per aproval
      &nbsp;
      <i className="icon-home text-30 -blue-1" />
      </button> */}
<div>
{/* <button type="button" class="btn text-danger btn-lg">Full price</button>
&nbsp;&nbsp;
<button type="button" class="btn text-danger btn-secondary btn-lg">Monthly price </button>
&nbsp;&nbsp;&nbsp;
<br></br>
<br></br> */}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn text-white btn-danger btn-lg">Full price</button>
  
  &nbsp;
  <br></br>
  <button type="button" class="btn  text-white btn-danger btn-lg">Monthly price</button>
  &nbsp;&nbsp;&nbsp;
</div>
<button
        className="button py-15 px-24  color-light-1 text-dark-1 absolute mt-20"
        data-x-click="mapFilter"
        style={{background: '#D9D9D9'}}
      >
       
      Get finance per aproval
      &nbsp;
      <img src="/img/ourimage/homes.svg" class="img-thumbnail" alt="..."/>
      </button>
</div>
      
    </div>
  );
};

export default Map;
