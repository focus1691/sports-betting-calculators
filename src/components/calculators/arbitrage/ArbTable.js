import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/arbActions";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import tableStyle from "../../../jss/Table";
import TableIcons from "../../../mui/TableIcons";
import { columns } from "../../../utils/constants/table/Arbitrage";

const useStyles = makeStyles(theme => ({ ...tableStyle(theme) }));

const ArbTable = ({ arbs, setArbs, editArb, deleteArb }) => {
	const classes = useStyles();

	return (
		<div className={classes.table}>
			<MaterialTable
				title=""
				icons={TableIcons}
				columns={columns}
				data={arbs}
				editable={{
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								if (oldData) {
									editArb({ oldArb: oldData, newArb: newData });
								}
							}, 600);
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								deleteArb({ oldArb: oldData });
							}, 600);
						})
				}}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		arbs: state.arbs
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setArbs: arbs => dispatch(actions.setArbs(arbs)),
		editArb: data => dispatch(actions.editArb(data)),
		deleteArb: data => dispatch(actions.deleteArb(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArbTable);