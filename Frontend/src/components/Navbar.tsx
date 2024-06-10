import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#112D4E',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    color: theme.palette.primary.main,
    borderRadius: '20px',
    marginLeft: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Instibot
        </Typography>
        <Button color="inherit" component={Link} to="/chatbot">Chat</Button>
        <Button color="inherit" component={Link} to="/faqs">FAQ</Button>
        <Button color="inherit" component={Link} to="/feedback">Feedback</Button>
        <Button
          component={Link}
          to="/login"
          className={classes.loginButton}
        >
          Login/Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
