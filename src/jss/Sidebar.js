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
	calcButton: {
		display: "inline-flex"
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	icon: {
		color: "#ff8f46"
	}
});

export default sidebarStyle;