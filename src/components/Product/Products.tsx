import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductData } from "../../types/products-data";
import Spinner from "../common/Spinner/Spinner";
import ErrorInfo from "../Error/ErrorInfo";
import Table from "../Table/Table";

interface Props {
	inputValue: number;
	numberLastProductsToDisplay: number;
	setNumberAllProduts: Dispatch<SetStateAction<number>>;
}

const Products = (props: Props) => {
	const [productsList, setProdutsList] = useState<ProductData[] | null>(null);

	const [messageError, setMessageError] = useState<string | null>(null);

	const [spinner, setSpinner] = useState(true);

	let startTable = props.numberLastProductsToDisplay - 5;
	let endTable = props.numberLastProductsToDisplay;

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch("https://reqres.in/aspi/products");

				if (String(res.status)[0] === "4") {
					return setMessageError(
						"Something went wrong with your request. Please try again."
					);
				}
				if (String(res.status)[0] === "5") {
					return setMessageError(
						"Something went wrong with serwer. Please try again later."
					);
				}
				const data = await res.json();

				props.setNumberAllProduts(data.data.length);

				await setProdutsList(
					data.data
						.filter((product: ProductData) => {
							if (props.inputValue) {
								return props.inputValue === product.id;
							} else return product;
						})
						.slice(startTable, endTable)
				);
				setSpinner(false);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [props.inputValue, props.numberLastProductsToDisplay]);

	return (
		<>
			{messageError === null ? (
				<Table products={productsList} />
			) : (
				<ErrorInfo errorMessage={messageError} />
			)}
			{spinner && messageError === null && <Spinner />}
		</>
	);
};

export default Products;
