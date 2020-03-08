import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/bonusActions";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import tableStyle from "../../../jss/Table";
import TableIcons from "../../../mui/TableIcons";
import { columns } from "../../../utils/constants/table/Bonus";

const useStyles = makeStyles(theme => ({ ...tableStyle(theme) }));

const BonusTable = ({bonusBets, setBonusBets, editBonusBet, deleteBonusBet}) => {
	const classes = useStyles();

	return (
		<div className={classes.table}>
			<MaterialTable
				title=""
				icons={TableIcons}
				columns={columns}
				data={bonusBets}
				editable={{
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								if (oldData) {
									editBonusBet({ oldBonusBet: oldData, newBonusBet: newData });
								}
							}, 600);
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								deleteBonusBet({ oldBonusBet: oldData });
							}, 600);
						})
				}}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		bonusBets: state.bonusBets
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setBonusBets: bonusBets => dispatch(actions.setBonusBets(bonusBets)),
		editBonusBet: data => dispatch(actions.editBonusBet(data)),
		deleteBonusBet: data => dispatch(actions.deleteBonusBet(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BonusTable);