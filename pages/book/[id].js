import { useEffect, useState, useCallback } from "react";
import Page from "../../layouts/page";
import { useRouter } from "next/dist/client/router";
import ApiClient from "../../lib/ApiClient";
import withAuth from "../../middlewares/auth";
import { useSelector, useDispatch } from "react-redux";

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

  // daily case load by a customer  end

  // const loadUploadedCasesByCustomer = useCallback(() => {
  //   const apiClient = ApiClient(authData);
  //   apiClient
  //     .post("/api/charts/uploadCasesByCustomer", {
  //       filter: filters.monthlyCustomer,
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setUploaded(response.data.responseData.caseCount);
  //         setTopCustomersUploaded(response.data.responseData.topCustomers);
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response && error.response.status === 403) {
  //         //unauthorized
  //         //dispatch(accountActionCreators.logout());
  //         //router.push("/login");
  //       }
  //     });
  // }, [authData, dispatch, router, filters]);

  useEffect(() => {
    const authenticated = withAuth(authData);
    if (!authenticated) {
      router.push("/login");
    }
  }, [router, authData]);

  return (
    <Page>
      <h2 className="block text-lg font-medium mt-4">
        Result after text analysis
      </h2>
    </Page>
  );
}
