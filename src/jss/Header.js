const headerStyle = theme => ({
	root: {
		margin: "auto",
		maxWidth: "80%",
		border: "1px solid #e6e6e6",
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