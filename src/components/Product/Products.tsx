import React, { useEffect, useState } from "react";
import { ProductData } from "../../types/products-data";
import Table from "../Table/Table";

interface Props {
	inputValue: number;
}

const Products = (props: Props) => {
	const [productsList, setProdutsList] = useState<ProductData[] | null>(null);

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
				await setProdutsList(data.data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			<Table products={productsList} inputValue={props.inputValue} />
		</>
	);
};

export default Products;
