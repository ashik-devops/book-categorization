import Link from "next/link";
import ApiClient from "../../lib/ApiClient";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  countriesActionCreators,
  customersActionCreators,
} from "../../store/action-creators";

// icons
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { reject } from "lodash";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
tableIcons.Add.displayName = "Add";
tableIcons.Check.displayName = "Check";
tableIcons.Clear.displayName = "Clear";
tableIcons.Delete.displayName = "Delete";
tableIcons.DetailPanel.displayName = "DetailPanel";
tableIcons.Edit.displayName = "Edit";
tableIcons.Export.displayName = "Export";
tableIcons.Filter.displayName = "Filter";
tableIcons.FirstPage.displayName = "FirstPage";
tableIcons.LastPage.displayName = "LastPage";
tableIcons.NextPage.displayName = "NextPage";
tableIcons.PreviousPage.displayName = "PreviousPage";
tableIcons.ResetSearch.displayName = "ResetSearch";
tableIcons.Search.displayName = "Search";
tableIcons.SortArrow.displayName = "SortArrow";
tableIcons.ThirdStateCheck.displayName = "ThirdStateCheck";
tableIcons.ViewColumn.displayName = "ViewColumn";

export default function MaterialTableDoctors({ tableData, deleteDoctor }) {
  const authData = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const columns = [
    {
      title: "Doctor Name",
      field: "name",
      filterPlaceholder: "Filter By Name",
      render: (rowData) => {
        return (
          <Link href={`/customers/view_details/${rowData.id}`} passHref={true}>
            <a className="underline">{rowData.name} </a>
          </Link>
        );
      },
    },
    {
      title: "Country",
      field: "country",
      sorting: false,
      filterPlaceholder: "Filter By Country",
      render: (rowData) => {
        if (countries && countries.length > 0) {
          return countries.map((country) => {
            if (country.code == rowData.country) {
              return country.name;
            }
          });
        }
      },
    },
    {
      title: "Lab/Clinic",
      field: "lab",
      filterPlaceholder: "Filter By Clinic",
      emptyValue: () => {
        return <span>No data....</span>;
      },
    },
  ];
  return (
    <MaterialTable
      style={{ backgroundColor: "#434e6e", color: "white" }}
      columns={columns}
      // editable={{
      //   onRowDelete: (selectedRow) => {
      //     return new Promise((resolve, reject) => {
      //       deleteDoctor(selectedRow.id);
      //       dispatch(customersActionCreators.fetchCustomers());
      //       setTimeout(() => resolve(), 1000);
      //     });
      //   },
      // }}
      data={(query) =>
        new Promise((resolve, reject) => {
          const apiClient = ApiClient(authData);
          apiClient
            .post("/api/customers/getCustomersForTable", {
              query,
            })
            .then((response) => {
              //console.log(response);
              //console.log(query);
              resolve({
                data: response.data.responseData.customers,
                page: query.page,
                totalCount: response.data.responseData.total,
              });
            });
        })
      }
      icons={{
        ...tableIcons,
        Delete: () => {
          return <DeleteOutline style={{ color: "red" }} />;
        },
        ViewColumn: () => {
          return <ViewColumn style={{ color: "green" }} />;
        },
        Export: () => {
          return <SaveAlt style={{ color: "green" }} />;
        },
        Filter: () => {
          return <FilterList style={{ color: "green" }} />;
        },
        FirstPage: () => {
          return <FirstPage style={{ color: "white" }} />;
        },
        LastPage: () => {
          return <LastPage style={{ color: "white" }} />;
        },
        NextPage: () => {
          return <ChevronRight style={{ color: "white" }} />;
        },
        PreviousPage: () => {
          return <ChevronLeft style={{ color: "white" }} />;
        },
        Clear: () => {
          return <Clear style={{ color: "white" }} />;
        },
        ThirdStateCheck: () => {
          return <Remove style={{ color: "white" }} />;
        },
      }}
      options={{
        filtering: true,
        pageSizeOptions: [10, 50, 100],
        pageSize: 10,
        paginationType: "normal",
        exportButton: true,
        columnsButton: true,
        exportAllData: true,
        headerStyle: {
          position: "sticky",
          top: 0,
          backgroundColor: "#5f6d96",
          fontWeight: "bold",
          color: "white",
          fontSize: "16px",
        },
        filterCellStyle: {
          color: "white !important",
          backgroundColor: "#b8babf",
        },
        maxBodyHeight: "600px",
        actionsColumnIndex: -1,
        searchFieldStyle: { color: "white" },
        debounceInterval: 700,
        padding: "dense",
        rowStyle: (data, index) =>
          index % 2 === 0
            ? { background: "#434e6e" }
            : { background: "#3c4663" },
      }}
      title="List of All Doctors.."
    />
  );
}
