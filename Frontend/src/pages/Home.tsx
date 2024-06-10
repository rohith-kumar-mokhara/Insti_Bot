import React from 'react';
import { Typography, Button, Grid, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F9F7F7',
    paddingBottom: theme.spacing(8),
  },
  welcomeContainer: {
    padding: theme.spacing(4),
    backgroundColor: '#3F72AF',
    color: '#FFFFFF',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  servicesContainer: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  loginContainer: {
    padding: theme.spacing(4),
    backgroundColor: '#DBE2EF',
    textAlign: 'center',
    borderRadius: '10px',
    marginBottom: theme.spacing(4),
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: theme.spacing(3),
  },
  olList: {
    listStyleType: 'decimal',
    paddingLeft: theme.spacing(3),
  },
  linkButton: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Navbar />
      <Container maxWidth="md">
        <div className={classes.welcomeContainer}>
          <Typography variant="h2" gutterBottom>
            Welcome to Instibot
          </Typography>
          <Typography variant="body1">
            Instibot is your personal assistant for all things related to life at IIT Madras.
          </Typography>
        </div>
        <Paper className={classes.servicesContainer}>
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1">
            <ul className={classes.list}>
              <li>Answering questions related to academics, campus life, admissions, and more</li>
              <li>Providing information about departments, courses, facilities, and events</li>
              <li>Offering guidance and support for navigating life at IIT Madras</li>
            </ul>
          </Typography>
        </Paper>
        <Paper className={classes.loginContainer}>
          <Typography variant="h4" gutterBottom>
            New to Instibot?
          </Typography>
          <Typography variant="body1">
            Here's a quick guide to get started:
            <ol className={classes.olList}>
              <li>Click on the "Start Chatting" button below</li>
              <li>Type your question or topic of interest in the chat window</li>
              <li>Instibot will provide you with relevant information and assistance</li>
              <li>Explore other pages using the navigation menu for more resources</li>
            </ol>
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/chatbot">
            Start Chatting
          </Button>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
