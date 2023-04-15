const LoginWithSocial = () => {
  return (
    <>
      <div className="col-md-10  mb-1 login_font">
        <button className="button col-11  text-black-1 py-15 rounded-8 bg-white "style={{fontSize:"21px"}}>
          <i className="icon-apple text-20 mr-10 " />
          {/* <img src="/img/ourimage/apple.svg" class="img-thumbnail" alt="..."/> */}
         Sign in with Apple
        </button>
      </div>

      <div className="col-md-10 col-12 mb-1">
        <button className="button col-11  text-black-1 py-15 rounded-8 bg-white "style={{fontSize:"19px"}}>
        <img src="/img/ourimage/google.svg" class="img-fluid mr-10" alt="..."/>
          {/* <i className="icon-apple text-15 mr-10" /> */}
          Sign in with Google
        </button>
      </div>
      
      <div className="col-md-10 col-12">
        <button className="button col-11  text-black-1 py-15 rounded-7 bg-white "style={{fontSize:"21px"}}>
        {/* <img src="/img/ourimage/facebook.svg" class="img-thumbnail" alt="..."/> */}
          <i className="icon-facebook text-20 mr-10 text-blue-1  rounded-5" />
          Sign in with Facebook
        </button>
      </div>
    </>
  );
};

export default LoginWithSocial;
