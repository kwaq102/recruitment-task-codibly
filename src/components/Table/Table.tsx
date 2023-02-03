import React from "react";
import { ProductData } from "../../types/products-data";
import TableRow from "./TableRow";

interface Props {
	products: ProductData[] | null;
}

const Table = (props: Props) => {
	return (
		<table className="homePage__productsTable">
			<thead className="homePage__productsTable__header">
				<tr className="homePage__productsTable__header-row">
					<th className="homePage__productsTable-header-cell">id</th>
					<th className="homePage__productsTable-header-cell">name</th>
					<th className="homePage__productsTable-header-cell">year</th>
				</tr>
			</thead>
			<tbody className="homePage__productsTable__body">
				{props.products &&
					props.products.map(product => (
						<TableRow product={product} key={product.id} />
					))}
			</tbody>
		</table>
	);
};

export default Table;
