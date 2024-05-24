import React from "react";
import PropTypes from 'prop-types';

import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material';

export const Image = ({ title, largeImage, smallImage }) => (
  <Card>
    <CardActionArea href={largeImage} title={title}>
      <CardMedia
        component="img"
        height="200"
        image={smallImage}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

Image.propTypes = {
  title: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
};
