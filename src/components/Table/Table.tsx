import React, { useState } from "react";
import { ProductData } from "../../types/products-data";
import TableRow from "./TableRow";

interface Props {
	products: ProductData[] | null;
}

const Table = (props: Props) => {
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
				{props.products &&
					props.products.map(product => (
						<TableRow product={product} key={product.id} />
					))}
			</tbody>
		</table>
	);
};

export default Table;
