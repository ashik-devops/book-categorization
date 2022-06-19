import { useEffect, useState, useCallback } from "react";
import Page from "../layouts/page";
import { useRouter } from "next/dist/client/router";
import ApiClient from "../lib/ApiClient";
import withAuth from "../middlewares/auth";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import moment from "moment";
import {
  accountActionCreators,
  loadingActionCreator,
} from "../store/action-creators";
import { Can } from "../lib/Authentication";

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
  const [labReport, setLabReport] = useState({
    state: "ready",
    fileToUpload: null,
    error: null,
    success: null,
  });
  const [caseFiles, setCaseFiles] = useState([]);
  const [labReports, setLabreports] = useState([]);
  const [fileUpload, setFileUpload] = useState({
    state: "ready",
    fileToUpload: null,
    error: null,
    success: null,
  });

  useEffect(() => {
    const authenticated = withAuth(authData);
    if (!authenticated) {
      router.push("/login");
    }
  }, [router, authData]);

  return (
    <Page>
      <h2 className="block text-lg font-medium mt-4">Please Upload the Book</h2>
      <div className=" box tab-content mt-4 p-4">
        <h2 className="block text-lg font-medium mt-4">
          Lab Report &amp; Other Files
        </h2>
        <div className=" box tab-content mt-4 p-4">
          {(() => {
            // console.log(labReports);
            if (labReports.length == 0) {
              return <div>No Files Found</div>;
            } else {
              return labReports.map((file, index) => {
                if (file.name) {
                  return (
                    <>
                      <div key={index} className="p-2">
                        <div
                          className="block items-center p-2 cursor-pointer transition
                              duration-100 ease-in-out bg-white dark:bg-dark-3
                              hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <div className="pos__ticket__item-name mr-1 text-md">
                            <a
                              className="underline"
                              onClick={(e) => {
                                e.preventDefault();
                                downloadFile(file.id);
                              }}
                            >
                              {file.name}
                            </a>
                          </div>
                          <div className="pt-2 text-xs italic">
                            - uploaded by{" "}
                            {[
                              file.created_by.first_name,
                              file.created_by.last_name,
                            ].join()}{" "}
                            at{" "}
                            {moment(file.created_at)
                              .utc()
                              .format("dddd, MMMM Do YYYY, h:mm:ss a")}
                          </div>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                }
              });
            }
          })()}
          {labReport &&
            labReport.error &&
            (() => {
              return (
                <div className="alert show alert-danger">{labReport.error}</div>
              );
            })()}
          {labReport &&
            labReport.success &&
            (() => {
              return (
                <div className="alert show alert-success">
                  {labReport.success}
                </div>
              );
            })()}
          <div
            className={`progress h-10 bg-white rounded mt-3 ${labFileProgress.visibility}`}
          >
            <div
              className="progress-bar bg-theme-9 rounded"
              role="progressbar"
              style={{
                width: ((done + failed) * 100) / total + "%",
              }}
            ></div>
          </div>
          <div classnames="p-2" hidden={`${labFileProgress.visibility}`}>
            {done} uploaded and {failed} failed from {total}{" "}
          </div>
          <input
            type="file"
            multiple
            className="form-control w-full mt-3"
            onChange={(e) => {
              Array.from(e.target.files).map((file, index) => {
                const filetype = file.name.split(".").pop().toLowerCase();
                if (allowedFileTypes.includes(filetype)) {
                  setLabReport({
                    ...labReport,
                    fileToUpload: Array.from(e.target.files),
                    error: null,
                    success: null,
                  });
                } else {
                  setLabReport({
                    ...labReport,
                    fileToUpload: null,
                    success: null,
                    error:
                      "File type not allowed. You can only upload the following types of files: " +
                      allowedFileTypes.join(", "),
                  });
                }
              });
            }}
          />
          <div>
            <button
              disabled={labReport.state == "uploading"}
              className={classNames({
                btn: true,
                "btn-success": true,
                "mt-2": true,
              })}
              onClick={(e) => {
                if (labReport.fileToUpload) {
                  uploadLabReport(patientCase.id);
                } else {
                  setLabReport({
                    ...labReport,
                    error: "Please select a file to upload.",
                  });
                }
              }}
            >
              {labReport && labReport.state == "ready" ? "Upload" : "Uploading"}
            </button>
          </div>
        </div>
      </div>
      <h2 className="block text-lg font-medium mt-4">Book List</h2>
      <table className="table border mt-4">
        <thead>
          <tr className="border">
            <td className="border">Book ID</td>
            <td className="border">Book Name</td>
            <td className="border">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="border">No Data</td>
            <td className="border">No Data</td>
            <td className="border">
              <button className="btn btn-success">
                <Link href="/book/23">
                  <a>View</a>
                </Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}
