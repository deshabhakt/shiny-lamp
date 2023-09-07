import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";
import ExtensionIcon from "@mui/icons-material/Extension";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { routePrefix } from "../../App";

const useStyles = makeStyles((theme) => ({
  optionList: {
    flex: 1,
    marginTop: "10px",
    width: "250px",
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid #ddd",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  selectedItem: {
    backgroundColor: "purple",
    color: "white",
    "&:hover": {
      backgroundColor: "purple", // Customize the highlight style here
      color: "white",
    },
  },
}));

const options = [
  { text: "Dashboard", icon: <DashboardIcon />, route: `${routePrefix}/` },
  { text: "Cases", icon: <AssignmentIcon />, route: `${routePrefix}/cases` },
  {
    text: "Documents",
    icon: <DescriptionIcon />,
    route: `${routePrefix}/documents`,
  },
  { text: "MODs", icon: <ExtensionIcon />, route: `${routePrefix}/mods` },
  {
    text: "Title Search Reports",
    icon: <ListAltIcon />,
    route: `${routePrefix}/title-search-reports`,
  },
  {
    text: "Vetting Reports",
    icon: <AssessmentIcon />,
    route: `${routePrefix}/vetting-reports`,
  },
  { text: "Cheques", icon: <PaymentIcon />, route: `${routePrefix}/cheques` },
  {
    text: "Banks",
    icon: <AccountBalanceIcon />,
    route: `${routePrefix}/banks`,
  },
  {
    text: "Societies",
    icon: <PeopleIcon />,
    route: `${routePrefix}/societies`,
  },
  {
    text: "Templates",
    icon: <ReceiptIcon />,
    route: `${routePrefix}/templates`,
  },
  { text: "Users", icon: <AccountCircleIcon />, route: `${routePrefix}/users` },
  {
    text: "Roles",
    icon: <SupervisorAccountIcon />,
    route: `${routePrefix}/roles`,
  },
  {
    text: "Statuses",
    icon: <CheckCircleIcon />,
    route: `${routePrefix}/statuses`,
  },
];

const OptionsList = () => {
  const classes = useStyles();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(location.pathname);
    console.log(location.pathname);
  }, [selectedOption, location.pathname]);

  return (
    <div className={classes.optionList}>
      <List>
        {options.map((option, index) => (
          <Link
            to={option.route}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              className={`${classes.listItem} ${
                selectedOption === option.route ? classes.selectedItem : ""
              }`}
              onClick={() => {
                setSelectedOption(option.route);
              }}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default OptionsList;
