import React, { ChangeEvent, useState } from "react";
import Switcher from "../common/Switcher";
import Products from "../Product/Products";
import loupe from "../../images/loupe.svg";
import close from "../../images/x.svg";

const HomePage = () => {
	const [inputFilterValue, setInputFilterValue] = useState<string>("");
	const [focus, setFocus] = useState<boolean>(false);
	const [numberAllProducts, setNumberAllProduts] = useState(0);
	const [numberLastProductsToDisplay, setNumberLastProductsToDisplay] =
		useState(5);

	const handleInputFilter = (e: ChangeEvent<HTMLInputElement>) => {
		if (isNaN(Number(e.target.value))) return;
		setInputFilterValue(e.target.value);
	};

	const resetInput = () => {
		setInputFilterValue("");
		setFocus(!focus);
	};

	return (
		<main className="homePage">
			<div className="homePage__wrapperForInput">
				<input
					className="homePage__searchInput"
					type="text"
					onChange={handleInputFilter}
					value={inputFilterValue}
					onFocus={() => {
						setFocus(true);
					}}
					onBlur={() => {
						inputFilterValue === "" && setFocus(false);
					}}
					placeholder={focus ? "" : "Search..."}
				/>
				<img
					className="homePage__iconToSearch"
					src={focus ? close : loupe}
					alt={focus ? "X icon to close searching" : "loupe for search produt"}
					onClick={() => resetInput()}
				/>
			</div>
			<Products
				inputValue={Number(inputFilterValue)}
				numberLastProductsToDisplay={numberLastProductsToDisplay}
				setNumberAllProduts={setNumberAllProduts}
			/>
			<div className="homePage__wrapperForSwitchers">
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
			</div>
		</main>
	);
};

export default HomePage;
