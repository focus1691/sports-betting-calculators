import React from 'react';
import Lay from "./components/calculators/Lay";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PermanentDrawerLeft from "./components/sidebar/Sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PermanentDrawerLeft />

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Lay />
      </main>
    </div>
  );
}

export default App;
