import React, { useState } from 'react';
import { TextField, Button, Typography, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F9F7F7',
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: '600px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#3F72AF',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#112D4E',
    },
  },
  thankYouMessage: {
    textAlign: 'center',
    color: '#112D4E',
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {!submitted ? (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="h5" gutterBottom className={classes.thankYouMessage}>
              We value your feedback
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Feedback"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="feedback"
              value={formValues.feedback}
              onChange={handleInputChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.submitButton}
            >
              Submit
            </Button>
          </form>
        ) : (
          <Typography variant="h6" className={classes.thankYouMessage}>
            Thank you for your feedback!
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default Feedback;
