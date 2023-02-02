import React, { useState } from "react";
import Products from "../Product/Products";
import Table from "../Table/Table";

const HomePage = () => {
	const [inputFilterValue, setInputFilterValue] = useState<string>("");
	const [focus, setFocus] = useState<boolean>(false);

	const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (Number.isNaN(Number(e.target.value))) return;
		setInputFilterValue(e.target.value);
	};

	return (
		<section className="homePage">
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
			<Products />
			{/* <Table /> */}
		</section>
	);
};

export default HomePage;
