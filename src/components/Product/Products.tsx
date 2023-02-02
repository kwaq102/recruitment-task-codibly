import React, { useEffect, useState } from "react";
import { ProductData } from "../../types/products-data";
import Table from "../Table/Table";

interface Props {
	inputValue: number;
	numberProducts: number;
}

const Products = (props: Props) => {
	const [productsList, setProdutsList] = useState<ProductData[] | null>(null);

	let startTable = props.numberProducts - 5;
	let endTable = props.numberProducts;

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch("https://reqres.in/api/products");

				// TODO to do handle errors
				if (res.status === 404) {
					console.log("status 404");
				}
				if (res.status === 500) {
					console.log("status 500");
				}
				const data = await res.json();

				await setProdutsList(
					data.data
						.filter((product: ProductData) => {
							if (props.inputValue) {
								return props.inputValue === product.id;
							} else return product;
						})
						.slice(startTable, endTable)
				);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [props.inputValue, props.numberProducts]);

	return (
		<>
			<Table products={productsList} />
		</>
	);
};

export default Products;
