import React from "react";
import PropTypes from 'prop-types';

import { Box, Grid, List, ListItem, Container, Typography, ListItemText } from '@mui/material';

export const About = ({ data }) => (
  <Box id="about" py={4}>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src="img/about.jpg" style={{ width: '100%', height: 'auto' }} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="about-text">
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1" paragraph>
              {data ? data.paragraph : "loading..."}
            </Typography>
            <Typography variant="h5" gutterBottom>Why Choose Us?</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <List>
                  {data
                    ? data.Why.map((d, i) => (
                        <ListItem key={`${d}-${i}`}>
                          <ListItemText primary={d} />
                        </ListItem>
                      ))
                    : "loading"}
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List>
                  {data
                    ? data.Why2.map((d, i) => (
                        <ListItem key={`${d}-${i}`}>
                          <ListItemText primary={d} />
                        </ListItem>
                      ))
                    : "loading"}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

About.propTypes = {
  data: PropTypes.shape({
    paragraph: PropTypes.string,
    Why: PropTypes.arrayOf(PropTypes.string),
    Why2: PropTypes.arrayOf(PropTypes.string)
  })
};
