import React from "react";
import PropTypes from 'prop-types';

import { Grid, Container, Typography } from '@mui/material';

import { Image } from "./image";

export const Gallery = ({ data }) => (
  <div id="portfolio" className="text-center">
    <Container>
      <div className="section-title">
        <Typography variant="h2" gutterBottom>
          Gallery
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </Typography>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {data
          ? data.map((d, i) => (
              <Grid item key={`${d.title}-${i}`} xs={12} sm={6} md={4} lg={4}>
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </Grid>
            ))
          : "Loading..."}
      </Grid>
    </Container>
  </div>
);

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
      smallImage: PropTypes.string.isRequired
    })
  ).isRequired
};
