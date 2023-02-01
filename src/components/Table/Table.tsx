import React from "react";
import TableRow from "./TableRow";
const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>year</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>identyfikator z Tabele</td>
					<td>nazwa z Tabele</td>
					<td>rok z Tabele</td>
				</tr>
				<TableRow />
			</tbody>
		</table>
	);
};

export default Table;
