import React, { useState } from "react";
import { ProductData } from "../../types/products-data";
import ProductInfo from "../Product/ProductInfo";

interface Props {
	product: ProductData;
}
const TableRow = (props: Props) => {
	const [modal, setModal] = useState<boolean>(false);
	const showModal = modal ? (
		<ProductInfo product={props.product} setModal={setModal} modal={modal} />
	) : null;
	const { id, name, year, color } = props.product;

	return (
		<>
			<tr
				className="homePage__productsTable__body-row"
				style={{
					backgroundColor: color,
				}}
				onClick={() => setModal(true)}
			>
				<td className="homePage__productsTable-body-cell">{id}</td>
				<td className="homePage__productsTable-body-cell">{name}</td>
				<td className="homePage__productsTable-body-cell">{year}</td>
			</tr>
			{showModal}
		</>
	);
};

export default TableRow;
