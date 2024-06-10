import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: '#3F72AF',
    color: '#FFFFFF',
  },
  toolbar: theme.mixins.toolbar,
  title: {
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Typography variant="h6" className={classes.title}>
        InstiBot
      </Typography>
      <List>
        {['Chat', 'FAQ', 'Feedback'].map((text, index) => (
          <Link to={`/${text.toLowerCase()}`} key={text} className={classes.link}>
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
