import Base from "../layouts/base";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { accountActionCreators } from "../store/action-creators/index";
import { If, Then, Else } from "react-if";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Login() {
  const dispatch = useDispatch();

  const router = useRouter();
  const [pageData, setPageData] = useState({
    loginStatus: "",
  });
  const loginUser = async (event) => {
    event.preventDefault();
    setPageData({ loginStatus: "IN_PROGRESS" });

    const credentials = {
      username: event.target.email.value.toLowerCase(),
      password: event.target.password.value,
    };
    axios
      .post("/api/auth/authenticate", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            accountActionCreators.login(response.data.responseData._token)
          );
          setPageData({ loginStatus: "LOGGED_IN" });

          setTimeout(() => {
            return router.push("/");
          }, 2000);
        }
      })
      .catch((error) => {
        setPageData({ loginStatus: "FAILED" });
      });
  };

  return (
    <Base>
      <section className="login">
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            <div className="hidden xl:flex flex-col min-h-screen">
              <div className="my-auto">Senti</div>
            </div>

            <form
              onSubmit={loginUser}
              method="post"
              className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0"
            >
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Login
                </h2>
                <If
                  condition={
                    pageData.loginStatus && pageData.loginStatus === "FAILED"
                  }
                >
                  <Then>
                    <div
                      className="alert alert-danger show flex items-center mt-4"
                      role="alert"
                    >
                      <div className="w-6 mr-3">
                        <FontAwesomeIcon
                          icon="exclamation-triangle"
                          size="lg"
                        />
                      </div>
                      Login Failed. Invalid Credentials.
                    </div>
                  </Then>
                </If>
                <If
                  condition={
                    pageData.loginStatus && pageData.loginStatus === "LOGGED_IN"
                  }
                >
                  <Then>
                    <div
                      className="alert alert-success show flex items-center mt-4"
                      role="alert"
                    >
                      Login Successful
                    </div>
                  </Then>
                </If>
                <If
                  condition={
                    pageData.loginStatus &&
                    pageData.loginStatus === "IN_PROGRESS"
                  }
                >
                  <Then>
                    <div
                      className="alert alert-primary show flex items-center mt-4"
                      role="alert"
                    >
                      Please wait while to verify your credentials
                    </div>
                  </Then>
                </If>
                <div className="intro-x mt-8">
                  <input
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                    required
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Base>
  );
}
