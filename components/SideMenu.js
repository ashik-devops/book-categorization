import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Can } from "../lib/Authentication";
export default function SideMenu({ children }) {
  const authData = useSelector((state) => state.account);

  return (
    <nav className="side-nav side-nav--simple">
      <a href="" className="intro-x flex items-center pl-6 pt-4">
        <FontAwesomeIcon icon="book-open" size="lg" />{" "}
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
        {Can(authData.token, "list", "case") &&
          (() => {
            return (
              <li>
                <Link href="/cases">
                  <a className="side-menu">
                    <div className="side-menu__icon">
                      <FontAwesomeIcon
                        icon="teeth-open"
                        size="lg"
                      ></FontAwesomeIcon>{" "}
                    </div>
                    <div className="side-menu__title">Books</div>
                  </a>
                </Link>
              </li>
            );
          })()}

        {Can(authData.token, "list", "user") &&
          (() => {
            return (
              <li>
                <Link href="/users">
                  <a className="side-menu">
                    <div className="side-menu__icon">
                      <FontAwesomeIcon icon="users" size="lg"></FontAwesomeIcon>{" "}
                    </div>
                    <div className="side-menu__title">Users</div>
                  </a>
                </Link>
              </li>
            );
          })()}
      </ul>
    </nav>
  );
}
