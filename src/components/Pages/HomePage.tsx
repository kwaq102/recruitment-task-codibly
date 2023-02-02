import React, { useEffect, useState } from "react";
import Switcher from "../common/Switcher";
import Products from "../Product/Products";

const HomePage = () => {
	const [inputFilterValue, setInputFilterValue] = useState<string>("");
	const [focus, setFocus] = useState<boolean>(false);

	const [numberAllProducts, setNumberAllProduts] = useState(0);

	console.log(numberAllProducts);

	const [numberLastProductsToDisplay, setNumberLastProductsToDisplay] =
		useState(5);

	// console.log(numberLastProductsToDisplay);

	const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (Number.isNaN(Number(e.target.value))) return;
		setInputFilterValue(e.target.value);
	};

	return (
		<main className="homePage">
			<h1>Strona główna</h1>
			<input
				type="text"
				onChange={handleInputFilter}
				value={inputFilterValue}
				onFocus={() => {
					setFocus(true);
				}}
				onBlur={() => {
					setFocus(false);
				}}
				placeholder={focus ? "" : "Search..."}
			/>
			<Products
				inputValue={Number(inputFilterValue)}
				numberLastProductsToDisplay={numberLastProductsToDisplay}
				setNumberAllProduts={setNumberAllProduts}
			/>
			<Switcher
				direction="prev"
				numberAllProducts={numberAllProducts}
				setNumber={setNumberLastProductsToDisplay}
			/>
			<Switcher
				direction="next"
				numberAllProducts={numberAllProducts}
				setNumber={setNumberLastProductsToDisplay}
			/>
		</main>
	);
};

export default HomePage;
