const drawerWidth = 240;

const sidebarStyle = theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		paddingTop: '20px'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		color: "#fff",
		background: "#2d2d2d",
		flexDirection: "inherit",
		paddingTop: "7%"
	},
	[theme.breakpoints.up('lg')]: {
		drawerPaper: {
			width: drawerWidth,
			color: "#fff",
			background: "#2d2d2d",
			flexDirection: "inherit",
			paddingTop: "7%"
		},
	  },
	
	[theme.breakpoints.only('md')]: {
		drawerPaper: {
			width: drawerWidth,
			color: "#fff",
			background: "#2d2d2d",
			flexDirection: "inherit",
			paddingTop: "7%"
		},
	  },
	  [theme.breakpoints.down('md')]: {
		drawerPaper: {
			width: drawerWidth,
			color: "#fff",
			background: "#2d2d2d",
			flexDirection: "inherit",
			paddingTop: "8% fixed"
		},
	  },
	//   [theme.breakpoints.only('sm')]: {
	// 	drawerPaper: {
	// 		width: drawerWidth,
	// 		color: "#fff",
	// 		background: "#2d2d2d",
	// 		flexDirection: "inherit",
	// 		paddingTop: "50%"
	// 	},
	//   },
	  [theme.breakpoints.down('sm')]: {
		drawerPaper: {
			width: drawerWidth,
			color: "#fff",
			background: "#2d2d2d",
			flexDirection: "inherit",
			paddingTop: "10%"
		},
	  },
	 
	  [theme.breakpoints.between('xs','sm')]: {
		drawerPaper: {
			width: drawerWidth,
			color: "#fff",
			background: "#2d2d2d",
			flexDirection: "inherit",
			paddingTop: "15%"
		},
	  },
	calcButton: {
		display: "inline-flex"
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	icon: {
		color: "#c58800",
	}
});

export default sidebarStyle;