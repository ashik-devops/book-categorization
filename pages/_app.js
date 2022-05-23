import "../styles/themes/rubick/dist/css/app.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../store/store";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartLine,
  faExclamationTriangle,
  faEye,
  faTrash,
  faUserMd,
  faPlus,
  faMinus,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTeethOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

library.add(
  faBookOpen,
  faCalendarDay,
  faPlus,
  faMinus,
  faTrash,
  faUserMd,
  faAlignRight,
  faInfoCircle,
  faEnvelope,
  faAngleDown,
  faFilePdf,
  faFileAlt,
  faPrint,
  faUserPlus,
  faUsers,
  faHome,
  faTeethOpen,
  faExclamationTriangle,
  faUnlockAlt,
  faUserCog,
  faEllipsisH,
  faSpinner,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faBell,
  faAngleDoubleLeft,
  faChartLine,
  faEye
);

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  return getLayout(
    <Provider store={store}>
      <PersistGate
        loading={
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
