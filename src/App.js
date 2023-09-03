import React, { useEffect, useState } from "react";
import "./App.css";
import TitleBar from "./components/title_bar/TitleBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";

// TODO: add all templates
// Import your components for each route
import Dashboard from "./pages/dashboard//Dashboard";
import OptionsList from "./components/options_list/options_list";
import SignIn from "./components/sign_in/SignIn";
// import Cases from "./components/Cases";
// import Documents from "./components/Documents";
// import MODs from "./components/MODs";
// import TitleSearchReports from "./components/TitleSearchReports";
// import VettingReports from "./components/VettingReports";
// import Cheques from "./components/Cheques";
// import Banks from "./components/Banks";
// import Societies from "./components/Societies";
// import Templates from "./components/Templates";
// import Users from "./components/Users";
// import Roles from "./components/Roles";
// import Statuses from "./components/Statuses";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  optionsMenu: {
    flex: 1,
  },
  pageContainer: {
    flex: 4,
    display: "flex",
  },
  dummyText: {
    alignSelf: "center",
    margin: "auto",
  },
}));

function App() {
  const styles = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signInHandler = (flag) => {
    setIsSignedIn(flag);
  };
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={!isSignedIn && <SignIn signInHandler={signInHandler} />}
          />
        </Routes>
        {isSignedIn && (
          <>
            <TitleBar isSignedIn={isSignedIn} signInHandler={signInHandler} />
            <div className={styles.mainContainer}>
              <div className={styles.optionsMenu}>
                <OptionsList />
              </div>
              <div className={styles.pageContainer}>
                <Routes>
                  <Route
                    path="/"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/dashboard"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/cases"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/documents"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/mods"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/title-search-reports"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/vetting-reports"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/cheques"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/banks"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/societies"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/templates"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/users"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/roles"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                  <Route
                    path="/statuses"
                    element={<Dashboard isSignedIn={isSignedIn} />}
                  />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
