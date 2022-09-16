import Main from "./Main";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="layout d-flex">
      <SideBar />
      <Main />
    </div>
  );
};

export default Layout;
