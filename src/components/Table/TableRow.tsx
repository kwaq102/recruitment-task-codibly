import React, { useState } from "react";
import { ProductData } from "../../types/products-data";
import ProductInfo from "../Product/ProductInfo";

interface Props {
	product: ProductData;
}
const TableRow = (props: Props) => {
	const [modal, setModal] = useState<boolean>(false);
	const showModal = modal ? <ProductInfo modal={modal} /> : null;

	const handleProductInfoModal = () => console.log("modal działą");
	const { id, name, year, color } = props.product;

	return (
		<>
			<tr
				style={{
					backgroundColor: color,
				}}
				onClick={handleProductInfoModal}
			>
				<td>{id}</td>
				<td>{name}</td>
				<td>{year}</td>
			</tr>
		</>
	);
};

export default TableRow;
