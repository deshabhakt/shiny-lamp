import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { routePrefix } from "../../App";

const useStyles = makeStyles((theme) => ({
  panelBody: {
    flex: 1,
    margin: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "30px",
  },
  dashboardStats: {
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
  },
  dashboardBox: {
    flex: 1,
    display: "flex",
    maxWidth: "13rem",
    maxHeight: "13rem",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // Background color
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", // Box shadow
  },
  dashboardNumber: {
    flex: 1,
    fontWeight: "bold",
    "& p": {
      fontSize: "3rem",
    },
  },
  dashboardText: {
    flex: 1,
    fontSize: "1rem",
  },
  table: {
    flex: 3,
    borderCollapse: "collapse",
    maxHeight: "10%",
  },
  tableTh: {
    height: "20px",
    padding: "5px",
    backgroundColor: "#f5f5f5", // Background color
    fontWeight: "bold",
  },
  tableThTd: {
    border: "1px solid #ddd",
    height: "10px",
    padding: "5px",
    textAlign: "center",
  },
  tableFootNote: {
    textAlign: "center",
  },
}));

const Dashboard = ({ isSignedIn }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isSignedIn) {
      navigate(`${routePrefix}/`);
    }
  });
  return (
    <div className={classes.panelBody}>
      <div className={classes.dashboardStats}>
        <div className={classes.dashboardBox}>
          <div className={classes.dashboardNumber}>
            <p>1</p>
          </div>
          <div className={classes.dashboardText}>
            <p>Delivered</p>
          </div>
        </div>
        <div className={classes.dashboardBox}>
          <div className={classes.dashboardNumber}>
            <p>0</p>
          </div>
          <div className={classes.dashboardText}>
            <p>Undelivered</p>
          </div>
        </div>
        <div className={classes.dashboardBox}>
          <div className={classes.dashboardNumber}>
            <p>0</p>
          </div>
          <div className={classes.dashboardText}>
            <p>Pending</p>
          </div>
        </div>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.tableTh}>S.No.</th>
            <th className={classes.tableTh}>Bank</th>
            <th className={classes.tableTh}>ReferenceNo</th>
            <th className={classes.tableTh}>Applicant Name</th>
            <th className={classes.tableTh}>Branch Manager Name</th>
            <th className={classes.tableTh}>Search Receipt No</th>
            <th className={classes.tableTh}>AssignedTo</th>
            <th className={classes.tableTh}>Status</th>
            <th className={classes.tableTh}>Delivery Date</th>
            <th className={classes.tableTh}>Created</th>
            <th className={`${classes.tableTh} actions`}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return (
              <tr>
                <td className={classes.tableThTd}>{ele.serial_number}</td>
                <td className={classes.tableThTd}>{ele.bank_name}</td>
                <td className={classes.tableThTd}>
                  {ele.reference_nunber}&nbsp;
                </td>
                <td className={classes.tableThTd}>
                  {ele.applicant_name}&nbsp;
                </td>
                <td className={classes.tableThTd}>
                  {ele.branch_manager_name}&nbsp;
                </td>
                <td className={classes.tableThTd}>
                  {ele.search_receipt_number}&nbsp;
                </td>
                <td className={classes.tableThTd}>{ele.assigned_to}&nbsp;</td>
                <td className={classes.tableThTd}>{ele.status}</td>
                <td className={classes.tableThTd}>{ele.delivery_date}&nbsp;</td>
                <td className={classes.tableThTd}>{ele.created}&nbsp;</td>
              </tr>
            );
          })}
          {/* <tr>
            <td className={classes.tableThTd}>1</td>
            <td className={classes.tableThTd}>State Bank of India</td>
            <td className={classes.tableThTd}>00101/12&nbsp;</td>
            <td className={classes.tableThTd}>Rakesh Kadam&nbsp;</td>
            <td className={classes.tableThTd}>J. P. Kumar&nbsp;</td>
            <td className={classes.tableThTd}>PK111&nbsp;</td>
            <td className={classes.tableThTd}>Investigator&nbsp;</td>
            <td className={classes.tableThTd}>Delivered</td>
            <td className={classes.tableThTd}>16-02-2023&nbsp;</td>
            <td className={classes.tableThTd}>16-02-2023&nbsp;</td>
          </tr> */}
        </tbody>
      </table>
      <p className={classes.tableFootNote}>
        <small>
          Page 1 of 1, showing 1 record out of 1 total, starting on record 1,
          ending on 1
        </small>
      </p>
    </div>
  );
};

const data = [
  {
    serial_number: 1,
    bank_name: "State Bank Of India",
    reference_nunber: "00101/12",
    applicant_name: "Rakesh kumar",
    branch_manager_name: "J. P. Kumar",
    search_receipt_number: "PK111",
    assigned_to: "Investigator",
    status: "Delivered",
    delivery_date: "10-07-2023",
    created: "17-04-2023",
  },
];

export default Dashboard;
