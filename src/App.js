import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Home from './pages/Home'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#5B5B5B',
    },
    secondary:{
      //main: '#75A8FF'
      main: '#FFFFFF'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
});

const App = ({ classes }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <CssBaseline />
      <AppHeader />
      <main className={classes.main}>
        <Home />
      </main>
      <div className={classes.appBarSpacer} />
      <AppFooter />
    </Fragment>
  </ThemeProvider>
);

export default withStyles(styles)(App);