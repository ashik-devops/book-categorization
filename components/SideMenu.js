import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Can } from "../lib/Authentication";
export default function SideMenu({ children }) {
  const authData = useSelector((state) => state.account);

  return (
    <nav className="side-nav side-nav--simple">
      <a className="side-menu">
        <div className="side-menu__icon">
          <FontAwesomeIcon icon="book-open" size="lg" />{" "}
        </div>
        <div className="side-menu__title">Dashboard</div>
      </a>
      <div className="side-nav__devider my-6"></div>
      <ul>
        <li>
          <Link href="/">
            <a className="side-menu">
              <div className="side-menu__icon">
                <FontAwesomeIcon icon="home" size="lg" />{" "}
              </div>
              <div className="side-menu__title">Dashboard</div>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
