import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export default function TopBar({ children }) {
  const account = useSelector((state) => state.account);
  const loading = useSelector((state) => state.loadingStatus);
  //console.log(loading);
  const authData = account.token && jwt.decode(account.token);
  const user = authData && authData._payload;
  return (
    <>
      <div className="top-bar">
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
        </div>
        {/* <div className="intro-x relative mr-3 sm:mr-6">
          <div className="search hidden sm:block">
            <input
              type="text"
              className="search__input form-control border-transparent placeholder-theme-13"
              placeholder="Search..."
            />
            <i
              data-feather="search"
              className="search__icon dark:text-gray-300"
            ></i>
          </div>
          <a className="notification " href=""></a>
          <div className="search-result">
            <div className="search-result__content">
              <div className="search-result__content__title">Pages</div>
              <div className="mb-5">
                <a href="" className="flex items-center">
                  <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                    <i className="w-4 h-4" data-feather="inbox"></i>
                  </div>
                  <div className="ml-3">Mail Settings</div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                    <i className="w-4 h-4" data-feather="users"></i>
                  </div>
                  <div className="ml-3">Users &amp; Permissions</div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                    <i className="w-4 h-4" data-feather="credit-card"></i>
                  </div>
                  <div className="ml-3">Transactions Report</div>
                </a>
              </div>
              <div className="search-result__content__title">Users</div>
              <div className="mb-5">
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Rubick Tailwind HTML Admin Template"
                      className="rounded-full"
                      src="/images/profile-2.jpg"
                    />
                  </div>
                  <div className="ml-3">Tom Cruise</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                    tomcruise@left4code.com
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Rubick Tailwind HTML Admin Template"
                      className="rounded-full"
                      src="/images/profile-1.jpg"
                    />
                  </div>
                  <div className="ml-3">Tom Cruise</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                    tomcruise@left4code.com
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Rubick Tailwind HTML Admin Template"
                      className="rounded-full"
                      src="/images/profile-12.jpg"
                    />
                  </div>
                  <div className="ml-3">Russell Crowe</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                    russellcrowe@left4code.com
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Rubick Tailwind HTML Admin Template"
                      className="rounded-full"
                      src="/images/profile-2.jpg"
                    />
                  </div>
                  <div className="ml-3">Morgan Freeman</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                    morganfreeman@left4code.com
                  </div>
                </a>
              </div>
              <div className="search-result__content__title">Products</div>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/preview-1.jpg"
                  />
                </div>
                <div className="ml-3">Sony A7 III</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                  Photography
                </div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/preview-12.jpg"
                  />
                </div>
                <div className="ml-3">Nike Air Max 270</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                  Sport &amp; Outdoor
                </div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/preview-13.jpg"
                  />
                </div>
                <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                  Smartphone &amp; Tablet
                </div>
              </a>
              <a href="" className="flex items-center mt-2">
                <div className="w-8 h-8 image-fit">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/preview-7.jpg"
                  />
                </div>
                <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                  Smartphone &amp; Tablet
                </div>
              </a>
            </div>
          </div>
        </div> */}
        <div className="intro-x dropdown mr-auto sm:mr-6">
          <div
            className="dropdown-toggle notification"
            // {notification--bullet cursor-pointer}

            role="button"
            aria-expanded="false"
          >
            {/* <FontAwesomeIcon icon="bell" size="lg" /> */}
          </div>
          {/* <div className="notification-content pt-2 dropdown-menu">
            <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
              <div className="notification-content__title">Notifications</div>
              <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-2.jpg"
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                 
                    <a
                      href="javascript:;"
                      className="font-medium truncate mr-5"
                    >
                      Tom Cruise
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                      06:05 AM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600 mt-0.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#039;s standard dummy text ever since the 1500
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-1.jpg"
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a
                      href="javascript:;"
                      className="font-medium truncate mr-5"
                    >
                      Tom Cruise
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                      05:09 AM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600 mt-0.5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-12.jpg"
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a
                      href="javascript:;"
                      className="font-medium truncate mr-5"
                    >
                      Russell Crowe
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                      06:05 AM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600 mt-0.5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-2.jpg"
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a
                      href="javascript:;"
                      className="font-medium truncate mr-5"
                    >
                      Morgan Freeman
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600 mt-0.5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomi
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative flex items-center mt-5">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="rounded-full"
                    src="/images/profile-13.jpg"
                  />
                  <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a
                      href="javascript:;"
                      className="font-medium truncate mr-5"
                    >
                      Brad Pitt
                    </a>
                    <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                      06:05 AM
                    </div>
                  </div>
                  <div className="w-full truncate text-gray-600 mt-0.5">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 20
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {loading && (
          <div className="mr-10">
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        )}

        <div className="intro-x dropdown w-12 h-10">
          <div
            className="dropdown-toggle w-12 h-10 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
            role="button"
            aria-expanded="false"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              alt="Rubick Tailwind HTML Admin Template"
              src={`https://robohash.org/123`}
            />
          </div>
          <div className="dropdown-menu w-56">
            <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
              <div className="p-4 border-b border-theme-27 dark:border-dark-3">
                <div className="font-medium">
                  {user
                    ? [user.first_name, user.middle_name, user.last_name].join(
                        " "
                      )
                    : ""}
                </div>
                <div className="text-xs text-theme-28 mt-0.5 dark:text-gray-600">
                  {user ? user.role : ""}
                </div>
              </div>
              <div className="p-2">
                {/* <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <i data-feather="user" className="w-4 h-4 mr-2"></i> Profile
              </a> */}

                <Link href="/users/my_profile">
                  <a className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                    My Profile
                  </a>
                </Link>
              </div>
              <div className="p-2 border-t border-theme-27 dark:border-dark-3">
                <Link href="/logout">
                  <a className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
