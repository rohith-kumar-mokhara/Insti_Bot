import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Paper, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  },
  chatContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    overflowY: 'auto',
    backgroundColor: '#F9F7F7',
  },
  message: {
    maxWidth: '70%',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DBE2EF',
    color: '#112D4E',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    color: '#112D4E',
  },
  inputContainer: {
    display: 'flex',
    padding: theme.spacing(2),
    backgroundColor: '#F9F7F7',
    borderTop: '1px solid #DBE2EF',
  },
  inputField: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
  sendButton: {
    backgroundColor: '#3F72AF',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#112D4E',
    },
  },
}));

const ChatWindow = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Replace the following line with logic to send the user's message to the chatbot backend and get a response
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.chatContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${classes.message} ${
              message.sender === 'user' ? classes.userMessage : classes.botMessage
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </Paper>
      <div className={classes.inputContainer}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type your message here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          className={classes.inputField}
        />
        <IconButton className={classes.sendButton} onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatWindow;
