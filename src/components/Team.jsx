import React from "react";
import PropTypes from 'prop-types';

import { Grid, Card, Container, CardMedia, Typography, CardContent } from '@mui/material';

export const Team = ({ data }) => (
  <div id="team" className="text-center">
    <Container>
      <div className="col-md-8 col-md-offset-2 section-title">
        <Typography variant="h2" gutterBottom>
          Meet the Team
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </Typography>
      </div>
      <Grid container spacing={4}>
        {data
          ? data.map((d, i) => (
              <Grid item xs={12} sm={6} md={3} key={`${d.name}-${i}`}>
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image={d.img}
                    alt={d.name}
                  />
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {d.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {d.job}
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

Team.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired
    })
  ).isRequired
};
