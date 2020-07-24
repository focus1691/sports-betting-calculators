const footerStyle = theme => ({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#a6812f',
    '& *': {
      padding: theme.spacing(1),
      fontWeight: 'bold',
    },
    '& hr': {
      padding: '0',
    },
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 240,
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: 240,
      },
    },
    '& a': {
      padding: theme.spacing(1),
    },
  },
});

export default footerStyle;
