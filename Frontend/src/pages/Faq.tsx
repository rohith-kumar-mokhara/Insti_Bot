import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles, Container, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: '#F9F7F7',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '800px',
    margin: 'auto',
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#112D4E',
    textAlign: 'center',
  },
  accordion: {
    marginBottom: theme.spacing(1),
    borderRadius: '8px',
    '& .MuiAccordionSummary-root.Mui-expanded': {
      borderBottom: '1px solid #3F72AF',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#112D4E',
  },
  content: {
    color: '#3F72AF',
  },
}));

const Faq = () => {
  const classes = useStyles();

  const faqData = [
    {
      question: 'What is Instibot?',
      answer: 'Instibot is your personal assistant for all things related to life at IIT Madras.',
    },
    {
      question: 'How do I use Instibot?',
      answer: 'Simply type your question or topic of interest in the chat window and Instibot will provide you with relevant information and assistance.',
    },
    {
      question: 'What services does Instibot provide?',
      answer: 'Instibot can answer questions related to academics, campus life, admissions, and more. It provides information about departments, courses, facilities, and events, and offers guidance and support for navigating life at IIT Madras.',
    },
    {
      question: 'Can I provide feedback about Instibot?',
      answer: 'Yes, you can provide feedback using the feedback form available on the website.',
    },
    {
      question: 'Is my personal information safe with Instibot?',
      answer: 'Yes, your personal information is kept confidential and used only to improve the services provided by Instibot.',
    },
  ];

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4" className={classes.title}>
            Frequently Asked Questions
          </Typography>
          {faqData.map((faq, index) => (
            <Accordion key={index} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography className={classes.heading}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.content}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </div>
  );
};

export default Faq;
