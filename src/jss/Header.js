const headerStyle = theme => ({
	root: {
		
		padding: theme.spacing(1)
    },
	title: {
		background: "#000",
		color: "#fff",
		'& .MuiTypography-h1': {
			fontWeight: 'bold'
		},
		'& .MuiIconButton-root': {
			float: 'right',
			padding: 0
		}
	},
});

export default headerStyle;