import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  logo: {
    flex: 1,
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    cursor: "pointer", // Add cursor pointer for interaction
    transition: "transform 0.3s ease", // Add a smooth transition effect
    "&:hover": {
      transform: "scale(1.05)", // Scale up on hover
    },
  },
  searchBar: {
    flex: 5,
    "& input": {
      width: "100%",
      padding: 8,
      border: "none",
      borderRadius: 4,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
  },
  signIn: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    "& button": {
      margin: "auto",
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      padding: "8px 16px",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
    },
  },
}));

const TitleBar = ({ isSignedIn, signInHandler }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.titleBar}>
      <div
        className={classes.logo}
        onClick={() => {
          navigate("/shiny-lamp/dashboard");
        }}
      >
        {/* <img src="logo.png" alt="LOGO" /> */}
        <p>
          Associate
          <br />
          Assistant
        </p>
      </div>
      <div className={classes.searchBar}>
        <input type="text" placeholder="Search for cases as keyword" />
      </div>
      <div className={classes.signIn}>
        <button
          onClick={() => {
            signInHandler(!isSignedIn);
            if (isSignedIn) navigate("/shiny-lamp/");
          }}
        >
          {isSignedIn ? "Sign out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
