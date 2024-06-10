import React, { useState } from 'react';
import { Paper, Tabs, Tab, TextField, Button, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F7F7',
  },
  card: {
    width: '400px',
    padding: theme.spacing(3),
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
  },
  tabs: {
    marginBottom: theme.spacing(2),
  },
  tabContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#3F72AF',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#112D4E',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    color: '#112D4E',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or registration logic here
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <Typography variant="h5" className={classes.title}>
          Welcome to Instibot
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.tabs}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {activeTab === 0 && (
          <form onSubmit={handleSubmit} className={classes.tabContent}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.submitButton}
            >
              Login
            </Button>
          </form>
        )}
        {activeTab === 1 && (
          <form onSubmit={handleSubmit} className={classes.tabContent}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.submitButton}
            >
              Register
            </Button>
          </form>
        )}
      </Paper>
    </div>
  );
};

export default Login;
