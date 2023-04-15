import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import LoginWithSocial from "../../components/common/LoginWithSocial";
import SignUpForm from "../../components/common/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Seo pageTitle="Sign Up" />
      {/* End Page Title */}

      {/* <div className="header-margin"></div> */}
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <SignUpForm />
    

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(SignUp), { ssr: false });
