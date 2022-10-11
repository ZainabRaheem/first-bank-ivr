import ActionTab from '../commons/action_tab'
import SideBar from '../commons/action_tab/SideBar';
import NavBar from '../../NavBar';
import LayoutContent from './layout_content';

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <LayoutContent>
        {props.children}
      </LayoutContent>
    </>
  );
};

export default Layout;
