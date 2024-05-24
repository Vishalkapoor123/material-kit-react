import React from "react";
import PropTypes from 'prop-types';

import { Box, Grid, Paper, Divider, Container, Typography } from '@mui/material';

export const Services = ({ data }) => (
  <Box id="services" className="text-center" py={4}>
    <Container>
      <div className="section-title">
        <Typography variant="h2" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </Typography>
      </div>
      <Grid container spacing={4}>
        {data
          ? data.map((d, i) => (
              <Grid item xs={12} md={4} key={`${d.name}-${i}`}>
                <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                  <Box textAlign="center">
                    <i className={d.icon} style={{ fontSize: 40, color: 'blue' }} />
                    <Box mt={2}>
                      <Typography variant="h4" gutterBottom>
                        {d.name}
                      </Typography>
                      <Divider />
                      <Typography variant="body1">
                        {d.text}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))
          : "loading"}
      </Grid>
    </Container>
  </Box>
);

Services.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
