import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/hedgingActions";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import tableStyle from "../../../jss/Table";
import TableIcons from "../../../mui/TableIcons";
import { columns } from "../../../utils/constants/table/Hedging";

const useStyles = makeStyles(theme => ({ ...tableStyle(theme) }));

const HedgingTable = ({ hedges, setHedges, editHedge, deleteHedge }) => {
	const classes = useStyles();

	return (
		<div className={classes.table}>
			<MaterialTable
				title=""
				icons={TableIcons}
				columns={columns}
				data={hedges}
				editable={{
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								if (oldData) {
									editHedge({ oldHedge: oldData, newHedge: newData });
								}
							}, 600);
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								deleteHedge({ oldHedge: oldData });
							}, 600);
						})
				}}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		hedges: state.hedges
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setHedges: hedges => dispatch(actions.setHedges(hedges)),
		editHedge: data => dispatch(actions.editHedge(data)),
		deleteHedge: data => dispatch(actions.deleteHedge(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HedgingTable);