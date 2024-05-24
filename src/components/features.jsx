import React from "react";
import PropTypes from 'prop-types';

import { Box, Grid, Container, Typography } from '@mui/material';

export const Features = ({ data }) => (
  <Box id="features" className="text-center" py={4}>
    <Container>
      <Typography variant="h2" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        {data
          ? data.map((d, i) => (
              <Grid item xs={6} md={3} key={`${d.title}-${i}`}>
                <Box textAlign="center">
                  <i className={d.icon} style={{ fontSize: 40, color: 'blue' }} />
                  <Typography variant="h4" gutterBottom>
                    {d.title}
                  </Typography>
                  <Typography variant="body1">
                    {d.text}
                  </Typography>
                </Box>
              </Grid>
            ))
          : "Loading..."}
      </Grid>
    </Container>
  </Box>
);

Features.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
