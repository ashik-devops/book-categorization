import { useEffect, useState, useCallback } from "react";
import Page from "../../layouts/page";
import { useRouter } from "next/dist/client/router";
import ApiClient from "../../lib/ApiClient";
import withAuth from "../../middlewares/auth";
import { useSelector, useDispatch } from "react-redux";
import Radar from "../../components/Radar";

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

  const loadFile = useCallback(() => {
    const apiClient = ApiClient(authData);
    apiClient
      .get("/api/files/" + router.query.id)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.responseData);
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

      <div className="col-span-6 mt-8 text-center">
        <div className="p-2">
          <label htmlFor="crud-form-1" className="form-label text-lg">
            Monthly Total 3D simulation Vs. Confirmed Cases
          </label>
        </div>
        <Radar
          heading={""}
          title={"Label"}
          uploaded={uploaded}
          confirmed={confirmed}
        />
      </div>
    </Page>
  );
}
