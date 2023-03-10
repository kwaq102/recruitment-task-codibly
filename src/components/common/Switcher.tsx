import React, { Dispatch, SetStateAction } from "react";

import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";

interface Props {
	direction: "prev" | "next";
	setNumber: Dispatch<SetStateAction<number>>;
	numberAllProducts: number;
}

const Switcher = (props: Props) => {
	const arrow = props.direction === "next" ? arrowRight : arrowLeft;
	const altText = props.direction === "next" ? "next" : "previous";

	return (
		<div
			className="Switcher"
			onClick={() => {
				props.setNumber(prev => {
					switch (props.direction) {
						case "prev":
							if (prev === 5) return prev;
							return (prev = prev - 5);
						case "next":
							if (props.numberAllProducts < prev) return prev;
							return (prev = prev + 5);
					}
				});
			}}
		>
			<img
				className={`Switcher__arrow ${props.direction}`}
				src={arrow}
				alt={`Arrow ${altText} site.`}
			/>
		</div>
	);
};

export default Switcher;
