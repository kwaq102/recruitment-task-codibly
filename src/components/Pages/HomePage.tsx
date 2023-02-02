import React, { useEffect, useState } from "react";
import Switcher from "../common/Switcher";
import Products from "../Product/Products";

const HomePage = () => {
	const [inputFilterValue, setInputFilterValue] = useState<string>("");
	const [focus, setFocus] = useState<boolean>(false);

	const [numberProducts, setNumberProducts] = useState(5);

	console.log(numberProducts);

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
				numberProducts={numberProducts}
			/>
			<Switcher direction="prev" setNumber={setNumberProducts} />
			<Switcher direction="next" setNumber={setNumberProducts} />
		</main>
	);
};

export default HomePage;
