import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    background: `url(/img/intro-bg.jpg) center center no-repeat`,
    backgroundColor: '#e5e5e5',
    backgroundSize: 'cover',
    position: 'relative',
    height: '100vh',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  introText: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
}));

export const Header = ({ data }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.overlay}/>
      <Container>
        <Grid container >
          <Grid item xs={12} sm={10} md={8}>
            <div className={classes.introText}>
              <Typography variant="h1" component="h1" gutterBottom>
                {data ? data.title : "Loading"}
                <span />
              </Typography>
              <Typography variant="body1" gutterBottom>
                {data ? data.paragraph : "Loading"}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#listing"
              >
                See all listings...
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object
};
