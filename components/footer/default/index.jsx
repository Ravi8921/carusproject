import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const index = () => {
  return (
    <footer className="footer -type-1" style={{ background: "#3D3D3D" }}>
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            {/* <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div> */}
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-2 col-lg-6 col-sm-6">
              <h5 className="text-25 fw-500 mb-30 " style={{ color: "whitesmoke" }}>Site Title</h5>
              <p className="text-5 fw-500 mb-30 " c>Subscribe to our Newsletter</p>
              <div class="input-group">
                <input type="search" class="form-control rounded bg-white" placeholder="Enter Your Email" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-danger">Subscribe</button>
              </div>
              <AppButton />
            </div>
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light" style={{ color: "whitesmoke" }}>
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
