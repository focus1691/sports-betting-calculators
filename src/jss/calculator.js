const calculatorStyle = theme => ({
	container: {
		border: "3px dotted #c58800",
		boxShadow: "inset 0 -1px 0 0 #000, inset 0 1px 0 0 #000, 0 1px 0 0 #000, 0 -1px 0 0 #000",
		marginBottom: "1px",

		background: "#404040",
		'& > *': {
			padding: theme.spacing(2),
		},
	},
	table: {
		background: 'yellow',
		width: '100%',
		'& .MuiPaper-root': {
			background: 'yellow',
			width: '100%'
		}
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
	selection: {
		padding: theme.spacing(1),
		'& .MuiFormLabel-root': {
			borderColor: 'red'
		},
		'& .MuiInputLabel-formControl': {
			borderColor: 'red'
		},
		'& .MuiInputBase-input': {
			color: '#fff'
		},
		'& .MuiInputLabel-animated': {
			color: '#ff8f46'
		},
		'& .MuiInput-formControl': {
			'&:before': {
				borderColor: '#fff'
			},
			'&:after': {
				borderColor: '#fff'
			},
			'&:focused': {
				borderColor: '#8CE7FC'
			}
		}
	},
	select: {
		padding: theme.spacing(1),
		'& .MuiSelect-select': {
			color: '#ff8f46',
			'& option': {
				color: '#000'
			},
		}
	},
	selectContainer: {
		'& .MuiInput-underline': {
			'&:before': {
				borderColor: '#fff'
			},
			'&:after': {
				borderColor: '#fff'
			},
			'&:focused': {
				borderColor: '#8CE7FC'
			}
		}
	},
	result: {
		margin: theme.spacing(1),
		fontWeight: "bold",
		'& .MuiFormLabel-root': {
			borderColor: 'red'
		},
		'& .MuiInputLabel-formControl': {
			borderColor: 'red'
		},
		'& .MuiInputBase-input': {
			color: '#fff'
		},
		'& .MuiInputLabel-animated': {
			color: '#fff'
		},
		'& .MuiInput-formControl': {
			'&:before': {
				color: '#73cd44',
				borderBottom: '1px dashed #78e7fc'
			},
			'&:after': {
				borderColor: '#fff'
			},
			'&:focused': {
				borderColor: '#8CE7FC'
			}
		}
	},
	resultText: {
		color: '#fff',
		borderBottom: '1px dashed #78e7fc',
		fontWeight: "bold"
	},
	resultMain: {
		margin: theme.spacing(1),
		fontWeight: "bold",
		'& .MuiFormLabel-root': {
			borderColor: 'red'
		},
		'& .MuiInputLabel-formControl': {
			borderColor: 'red'
		},
		'& .MuiInputBase-input': {
			color: '#fff'
		},
		'& .MuiInputLabel-animated': {
			color: '#fff'
		},
		'& .MuiInput-formControl': {
			'&:before': {
				color: '#73cd44',
				borderBottom: '1px dashed #73cd44'
			},
			'&:after': {
				borderColor: '#fff'
			},
			'&:focused': {
				borderColor: '#8CE7FC'
			}
		}
	},
	calculateBtn: {
		margin: theme.spacing(1),
		background: '#095609',
		color: '#fff',
		border: '2px solid #fff',
		"&:hover": {
			background: "#000"
		}
	},
	clearBtn: {
		margin: theme.spacing(1),
		background: '#ce3b3b',
		color: '#fff',
		border: '2px solid #fff',
		"&:hover": {
			background: "#000"
		}
	},
});

export default calculatorStyle;