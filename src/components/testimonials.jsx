import React from "react";
import PropTypes from 'prop-types';

import { Grid, Card, Avatar, Container, Typography, CardContent } from '@mui/material';

export const Testimonials = ({ data }) => (
  <div id="testimonials">
    <Container>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h4">What our clients say</Typography>
      </div>
      <Grid container spacing={4}>
        {data
          ? data.map((d, i) => (
              <Grid item xs={12} md={4} key={`${d.name}-${i}`}>
                <Card>
                  <CardContent style={{ textAlign: 'center' }}>
                    <Avatar 
                      alt={d.name}
                      src={d.img}
                      style={{ width: 60, height: 60, margin: '0 auto 1rem' }}
                    />
                    <Typography variant="body1" gutterBottom>
                      {d.text}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      - {d.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : "loading"}
      </Grid>
    </Container>
  </div>
);

Testimonials.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
