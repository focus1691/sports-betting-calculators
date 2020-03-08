import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import tableStyle from "../../../jss/Table";
import TableIcons from "../../../mui/TableIcons";

const useStyles = makeStyles(theme => ({ ...tableStyle(theme) }));

const LayTable = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		columns: [
			{ title: 'Name', field: 'name' },
			{ title: 'Surname', field: 'surname' },
			{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
			{
				title: 'Birth Place',
				field: 'birthCity',
				lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
			},
		],
		data: [
			{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
			{
				name: 'Zerya Betül',
				surname: 'Baran',
				birthYear: 2017,
				birthCity: 34,
			},
		],
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
						}),
				}}
			/>
		</div>
	);
};

export default LayTable;