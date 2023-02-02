import React, { useState } from "react";
import { ProductData } from "../../types/products-data";
import ProductInfo from "../Product/ProductInfo";

interface Props {
	product: ProductData;
}
const TableRow = (props: Props) => {
	const [modal, setModal] = useState<boolean>(false);
	const showModal = modal ? <ProductInfo modal={modal} /> : null;

	const handleProductInfoModal = () => setModal(!modal);

	const { id, name, year } = props.product;

	return (
		<>
			<tr>
				<td onClick={handleProductInfoModal}>{id}</td>
				<td>{name}</td>
				<td>{year}</td>
			</tr>
			{showModal}
		</>
	);
};

export default TableRow;
