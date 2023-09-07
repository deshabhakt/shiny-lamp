import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px", // You can specify your desired padding in pixels
  },
  form: {
    width: "100%",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "16px", // Adjust the gap as needed
  },
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

const SignIn = ({ signInHandler }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInHandler(true);
    navigate("/shiny-lamp/dashboard");
  };

  return (
    <div className={classes.root}>
      <h2>Sign In</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Username"
          variant="outlined"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
