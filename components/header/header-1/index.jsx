import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import MobileMenu from "../MobileMenu";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <header className={`header ${navbar ? " is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/img/general/logo.svg" alt="logo icon" />
                  {/* <img src="/img/general/logo-dark.svg" alt="logo icon" /> */}
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">

                <div class="form-check btn-outline-danger"style={{marginRight:"-19px",marginTop:"9px"}}>
                  <input type="radio"   id="radio1" name="optradio" value="option1" checked />
                </div>
                <Link
                  href="/#"
                  className=" px-12 fw-400 text-18 m-4  h-30 text-dark-1 "
                >
                  Live search
                 
                </Link>




                <div className="row x-gap-20 items-center xxl:d-none">

                <div class="input-group">
  <input type="search" class="form-control rounded-100 icon-search bg-white " placeholder="Search" aria-label="Search..." aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-info text-black bg-white rounded-100"> Cars </button>
</div>

                  {/* <CurrenctyMegaMenu textClass="" /> */}
                  {/* End Megamenu for Currencty */}
                  {/* <div class="container bg-light rounded-100">

                    <div class="row height d-flex justify-content-center align-items-center">

                      <div class="col-md-12">

                        <div class="form">

                          <i class="fa fa-search "></i>
                          <input type="text" class="form-control form-input" placeholder="Search ..." />
                          <span class="left-pan dropdown-toggle" data-toggle="dropdown">cars<i class="fa fa-microphone"></i></span>
                        </div>

                      </div>

                    </div>

                  </div> */}

                  {/* <button type="button" class="btn btn-outline-primary">cars</button> */}
                  {/* </div> */}
                  {/* Start vertical devider*/}
                  {/* <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />

                  </div> */}





                  {/* End vertical devider*/}

                  {/* <LanguageMegaMenu textClass="" /> */}
                  {/* End Megamenu for Language */}
                </div>
                {/* End language and currency selector */}

                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none ">






                  <Link
                    href="/others-pages/login"
                    className=" px-30 fw-400 text-14   h-30 text-dark-1 "
                  >
                    Log in
                  </Link>
                  <Link
                    href="/#"
                    className=" px-3 fw-400 text-14 -white  h-30 text-dark-1 "
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/others-pages/signup"
                    className="button px-30 fw-400 text-14 border-white -outline-white h-50  ml-20 bg-black rounded-100 text-white"
                  >
                    Register
                  </Link>

                  <Link
                    href="/#"
                    className="button px-30 fw-400 text-13 border-white -outline-white h-50  ml-10 bg-danger rounded-100 text-white"
                  >
                    Sell My Car
                  </Link>
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 ">
                  <div>
                    <Link
                      href="/#"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet "
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default Header1;
