import Base from "./base";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
export default function Page({ children }) {
  return (
    <Base>
      <div className="flex">
        <SideMenu></SideMenu>
        <div className="content">
          <TopBar></TopBar>
          {children}
        </div>
      </div>
    </Base>
  );
}
