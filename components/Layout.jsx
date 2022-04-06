import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#fde8f41a]">
      <Navbar />
      <main>{children}</main>
      <div id="container-5d84192ff9af6fbe751dc69ae3bb81fa"></div>
      <Footer />
    </div>
  );
};

export default Layout;
