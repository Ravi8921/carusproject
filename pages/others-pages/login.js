import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import LoginWithSocial from "../../components/common/LoginWithSocial";
import LoginForm from "../../components/common/LoginForm";

const LogIn = () => {
  return (
    <>
      <Seo pageTitle="Login" />
      {/* End Page Title */}

      <div className="">      <DefaultHeader /></div>
      {/* header top margin */}


      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-black bg-image loginimage" >
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="  shadow-4 rounded-4">
                <LoginForm />
                {/* End .Login */}

                {/* <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                    <div className="text-center">or sign in with</div>
                  </div>
                  <LoginWithSocial />
                  <div className="col-12">
                    <div className="text-center px-30">
                      By creating an account, you agree to our Terms of Service
                      and Privacy Statement.
                    </div>
                  </div>
                </div> */}
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(LogIn), { ssr: false });
