const footerStyle = theme => ({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    
    backgroundColor: '#a6812f',
    '& *': {
     
      fontWeight: 'bold',
    },
    '& hr': {
      padding: '0',
    },
    '& > div': {
     
    },
    '& a': {
      padding: theme.spacing(1),
    },
  },
});

export default footerStyle;
