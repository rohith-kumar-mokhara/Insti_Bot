import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar.tsx';
import ChatWindow from '../components/ChatWindow.tsx';
// Import other pages like FAQ and Feedback if you have those components

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

const InstiBot = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content}>
            <ChatWindow />
        </main>
      </div>
  );
};

export default InstiBot;
