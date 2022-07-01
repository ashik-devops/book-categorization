import { useEffect, useState, useCallback } from "react";
import Page from "../../layouts/page";
import { useRouter } from "next/dist/client/router";
import ApiClient from "../../lib/ApiClient";
import withAuth from "../../middlewares/auth";
import { useSelector, useDispatch } from "react-redux";
import RadarChart from "../../components/RadarChart";

import moment from "moment";
import {
  accountActionCreators,
  loadingActionCreator,
} from "../../store/action-creators";
import { Can } from "../../lib/Authentication";

export default function Dashboard() {
  const authData = useSelector((state) => state.account);
  const router = useRouter();
  const dispatch = useDispatch();
  const apiClient = ApiClient(authData);
  const [positive, setPositive] = useState();
  const [negative, setNegative] = useState();

  const loadFile = useCallback(() => {
    const apiClient = ApiClient(authData);
    apiClient
      .get("/api/files/" + router.query.id)
      .then((response) => {
        if (response.status === 200) {
          setPositive(response.data.responseData[0]);
          setNegative(response.data.responseData[1]);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
        }
      });
  }, [authData, dispatch, router, loadFile]);

  useEffect(() => {
    const authenticated = withAuth(authData);
    if (!authenticated) {
      router.push("/login");
    }
    loadFile();
  }, [router, authData, loadFile]);

  return (
    <Page>
      <h2 className="block text-lg font-medium mt-4">
        Result after text analysis
      </h2>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 mt-8 text-center">
          <RadarChart heading="Positive Sentiments" sentiments={positive} />
        </div>
        <div className="col-span-6 mt-8 text-center">
          <div className="p-2"></div>
          <RadarChart heading="Negative Sentiments" sentiments={negative} />
        </div>
      </div>
    </Page>
  );
}
