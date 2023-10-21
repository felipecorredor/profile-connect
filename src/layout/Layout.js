import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RegisterModal from "../components/modals/RegisterModal/RegisterModal";
import ToasterProvider from "../../providers/ToastProvider";
import LoginModal from "../components/modals/LoginModal/LoginModal";

const Layout = ({ children, header, footer }) => {
  useEffect(() => {
    animation();

    niceSelect();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <RegisterModal />
      <LoginModal />
      <ToasterProvider />
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}
        {/* main header */}
        <Header header={header} />
        {/*Form Back Drop*/}
        <Sidebar />
        {/*End Hidden Sidebar */}
        {children}
        {/* Footer Area Start */}
        <Footer footer={footer} />
        {/* Footer Area End */}
      </div>
    </Fragment>
  );
};
export default Layout;
