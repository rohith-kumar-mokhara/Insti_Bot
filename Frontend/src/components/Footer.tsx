import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#112D4E', padding: '20px 0', color: '#FFFFFF' }}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Instibot. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
