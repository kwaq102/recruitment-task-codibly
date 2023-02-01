import React from "react";

interface Props {
	modal: boolean;
}

const ProductInfo = (props: Props) => {
	console.log(`Wartość: ${props.modal}`);

	return (
		<>
			<p>Tu będą wszystkie informacje o produkcie?</p>
		</>
	);
};

export default ProductInfo;
