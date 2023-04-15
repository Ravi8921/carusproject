import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const SignUpForm = () => {
  return (
    <section class="h-100 ">
      <div class="container  h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6  d-xl-block">
                  <img
                    src="/img/ourimage/Left.png"
                    alt="Sample photo"
                    class="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  // style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;"
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 " style={{
                      fontFamily: 'Poppins', fontStyle: "normal", fontWeight: "600", fontSize: "25.192px", lineHeight: "140%"
                    }}>Create account</h3>
                    <span>For business, band or celebrity.</span>
                    <div class="row" style={{ marginTop: "40px" }}>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label " for="form3Example1m">
                            Full Name
                          </label>
                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" required />

                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n">
                            Nationality
                          </label>
                          <div className="form-input ">
                            <input type="text" required />

                          </div>

                          {/* <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder=""
                          /> */}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example97">
                            Email or phone number
                          </label>
                          <div className="form-input ">
                            <input type="text" required />

                          </div>

                          {/* <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder=""
                          /> */}
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                            Age
                          </label>
                          <div className="form-input ">
                            <input type="date" required />

                          </div>
                          {/* <input
                            type="date"
                            class="form-control"
                            id="inputPassword4"
                            placeholder=""
                          /> */}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m1">
                            Password
                          </label>
                          <div className="form-input ">
                            <input type="text" required />

                          </div>

                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="">
                          <label class="form-label" for="form3Example1n1">
                            Confirm password
                          </label>
                          <div className="form-input ">
                            <input type="text" required />

                          </div>
                        </div>
                      </div>
                    </div>
                    &nbsp;
                    <div className="form-checkbox mt-5">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>

                      <div className="text-15 lh-15 text-light-1 ml-10">
                        Remember me
                      </div>
                      <Link className="text-blue-1" href="/others-pages/login" style={{ marginLeft: "270px" }}>Forget password ?</Link>

                    </div>
                    <div className="form-checkbox mt-5">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>

                      <div className="text-15 lh-15 text-light-1 ml-10">
                        I agree to all the <span className="text-blue-1">Terms</span>  and <span className="text-blue-1">Privacy policy</span>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-center  "
                      style={{ marginTop: "80px" }}
                    >
                      {/* <button type="button" class="btn btn-light btn-lg">Reset all</button> */}
                      <div className="col-md-6">
                        <button
                          type="submit"
                          href="#"
                          className="button py-15 -dark-1 bg-blue-1 text-white w-100"
                        >
                          Create account <div className=" ml-15" />
                        </button>
                      </div>
                      &nbsp;
                      <div className="col-md-6 bg-danger ">
                        <button className="button col-6  bg-black text-white py-15 rounded-8 w-100 ">
                        {/* <img src="/img/ourimage/google.svg" class="img-fluid text-15 mr-10" alt="..."/> */}
                          <i className="icon-apple text-15 mr-10" />
                          Sign in with Google
                        </button>
                      </div>

                    </div>

                  </div>

                  <div className="text-15 lh-15 text-light-1 ml-10 d-flex justify-content-center">
                    Do not have an account?  <Link className="text-blue-1" href="/others-pages/login">  Login</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SignUpForm;





















// import Link from "next/link";

// const SignUpForm = () => {
//   return (
//     <form className="row y-gap-20">
//       <div className="col-12">
//         <h1 className="text-22 fw-500">Welcome back</h1>
//         <p className="mt-10">
//           Already have an account yet?{" "}
//           <Link href="/others-pages/login" className="text-blue-1">
//             Log in
//           </Link>
//         </p>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <div className="form-input ">
//           <input type="text" required />
//           <label className="lh-1 text-14 text-light-1">First Name</label>
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <div className="form-input ">
//           <input type="text" required />
//           <label className="lh-1 text-14 text-light-1">Last Name</label>
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <div className="form-input ">
//           <input type="text" required />
//           <label className="lh-1 text-14 text-light-1">Email</label>
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <div className="form-input ">
//           <input type="password" required />
//           <label className="lh-1 text-14 text-light-1">Password</label>
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <div className="form-input ">
//           <input type="password" required />
//           <label className="lh-1 text-14 text-light-1">Confirm Password</label>
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <div className="d-flex ">
//           <div className="form-checkbox mt-5">
//             <input type="checkbox" name="name" />
//             <div className="form-checkbox__mark">
//               <div className="form-checkbox__icon icon-check" />
//             </div>
//           </div>
//           <div className="text-15 lh-15 text-light-1 ml-10">
//             Email me exclusive Agoda promotions. I can opt out later as stated
//             in the Privacy Policy.
//           </div>
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-12">
//         <button
//           type="submit"
//           href="#"
//           className="button py-20 -dark-1 bg-blue-1 text-white w-100"
//         >
//           Sign Up <div className="icon-arrow-top-right ml-15" />
//         </button>
//       </div>
//       {/* End .col */}
//     </form>
//   );
// };

// export default SignUpForm;
