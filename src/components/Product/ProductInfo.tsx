import React, { Dispatch, SetStateAction } from "react";
import { ProductData } from "../../types/products-data";

interface Props {
	product: ProductData;
	setModal: Dispatch<SetStateAction<boolean>>;
}

const ProductInfo = (props: Props) => {
	console.log(`Modal z informacjami działa`);

	const { id, name, year, color, pantoneValue } = props.product;

	return (
		<div>
			<span onClick={() => props.setModal(false)}>Close</span>
			<h3>Product information</h3>
			<p>
				<span>id:</span> {id}
			</p>
			<p>
				<span>name:</span> {name}
			</p>
			<p>
				<span>year:</span> {year}
			</p>
			<p>
				<span>color:</span> {color}
			</p>
			<p>
				<span>pantone value:</span> {pantoneValue}
			</p>
		</div>
	);
};

export default ProductInfo;
