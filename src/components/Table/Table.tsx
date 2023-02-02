import React from "react";
import { ProductData } from "../../types/products-data";
import TableRow from "./TableRow";

interface Props {
	products: ProductData[] | null;
	inputValue: number;
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
					props.products
						.map(product => <TableRow product={product} key={product.id} />)
						.filter(row => {
							if (props.inputValue) {
								return props.inputValue === row.props.product.id;
							} else return row;
						})}

				{/* TODO dodać slice() lub coś co utnie tablicę bo musi pokazywać tylko 5 elementów */}
			</tbody>
		</table>
	);
};

export default Table;
