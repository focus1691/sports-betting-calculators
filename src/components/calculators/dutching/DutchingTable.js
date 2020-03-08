import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import tableStyle from "../../../jss/Table";
import TableIcons from "../../../mui/TableIcons";


const useStyles = makeStyles(theme => ({ ...tableStyle(theme) }));

const DutchingTable = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		columns: [
			{ title: "Name", field: "name" }
		],
		data: [
			{ name: "" },
		]
	});

	return (
		<div className={classes.table}>
			<MaterialTable
				title="Editable Example"
				icons={TableIcons}
				columns={state.columns}
				data={state.data}
				editable={{
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								if (oldData) {
									setState(prevState => {
										const data = [...prevState.data];
										data[data.indexOf(oldData)] = newData;
										return { ...prevState, data };
									});
								}
							}, 600);
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								setState(prevState => {
									const data = [...prevState.data];
									data.splice(data.indexOf(oldData), 1);
									return { ...prevState, data };
								});
							}, 600);
						})
				}}
			/>
		</div>
	);
};

export default DutchingTable;
