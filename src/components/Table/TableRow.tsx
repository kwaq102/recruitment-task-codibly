import React, { useState } from "react";
import ProductInfo from "../Product/ProductInfo";
const TableRow = () => {
	const [modal, setModal] = useState<boolean>(false);

	const showModal = modal ? <ProductInfo modal={modal} /> : null;

	const handleProductInfoModal = () => setModal(!modal);

	return (
		<>
			<tr>
				<td onClick={handleProductInfoModal}>identyfikator z TableRow</td>
				<td>nazwa z TableRow</td>
				<td>rok z TableRow</td>
			</tr>
			{showModal}
		</>
	);
};

export default TableRow;
