import React, { useState } from "react";
import { ProductData } from "../../types/products-data";
import ProductInfo from "../Product/ProductInfo";

interface Props {
	product: ProductData;
}
const TableRow = (props: Props) => {
	const [modal, setModal] = useState<boolean>(false);
	const showModal = modal ? <ProductInfo product={props.product} /> : null;
	const { id, name, year, color } = props.product;

	return (
		<>
			<tr
				style={{
					backgroundColor: color,
				}}
				onClick={() => setModal(true)}
			>
				<td>{id}</td>
				<td>{name}</td>
				<td>{year}</td>
			</tr>
			{showModal}
		</>
	);
};

export default TableRow;
