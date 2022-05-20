import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Base from "../layouts/base";
import { accountActionCreators } from "../store/action-creators";
import Loading from "../components/Loading";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Logout() {
  const [logoutMessage, setLogoutMessage] = useState("Logging you out");
  const authData = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(accountActionCreators.logout());
    router.push("/login");
  }, [router, dispatch]);
  return (
    <>
      <Base>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Base>
    </>
  );
}
