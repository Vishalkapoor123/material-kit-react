import emailjs from "emailjs-com";
import PropTypes from 'prop-types';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Box, Button, Container, TextField, Typography, TextareaAutosize } from '@mui/material';


const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = ({ data }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = state;
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box id="contact">
      <Container maxWidth="md">
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="body1" paragraph>
            Please fill out the form below to send us an email and we will get back to you as soon as possible.
          </Typography>
        </Box>
        <form name="sentMessage" onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              placeholder="Your Name"
              required
              value={state.name}
              onChange={handleChange}
              fullWidth
              mb={2}
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              placeholder="Your Email"
              required
              value={state.email}
              onChange={handleChange}
              fullWidth
              mb={2}
            />
            <TextareaAutosize
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              value={state.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginBottom: '16px', resize: 'none' }}
            />
            <Button type="submit" variant="contained" size="large" color="primary">
              Send Message
            </Button>
          </Box>
        </form>
        <Box display="flex" justifyContent="center">
          <Box textAlign="center" mr={4}>
            <Typography variant="body1" gutterBottom>
              <strong>Address:</strong> {data ? data.address : "loading"}
            </Typography>
          </Box>
          <Box textAlign="center" mr={4}>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> {data ? data.phone : "loading"}
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {data ? data.email : "loading"}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={4}>
          <Box>
            <Link to={data ? data.facebook : "/"}><i className="fa fa-facebook" /></Link>
          </Box>
          <Box mx={2}>
            <Link to={data ? data.twitter : "/"}><i className="fa fa-twitter" /></Link>
          </Box>
          <Box>
            <Link to={data ? data.youtube : "/"}><i className="fa fa-youtube" /></Link>
          </Box>
        </Box>
      </Container>
      <Box bgcolor="primary.dark" py={2}>
        <Container maxWidth="md">
          <Typography variant="body1" align="center" color="textSecondary">
            &copy; {new Date().getFullYear()} Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow" style={{ color: 'inherit' }}>
              TemplateWire
            </a>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

Contact.propTypes = {
    data: PropTypes.object
  };