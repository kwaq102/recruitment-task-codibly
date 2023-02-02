import React, { Dispatch, SetStateAction } from "react";

import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";

interface Props {
	direction: "prev" | "next";
	setNumber: Dispatch<SetStateAction<number>>;
}

const Switcher = (props: Props) => {
	const arrow = props.direction === "next" ? arrowRight : arrowLeft;
	const altText = props.direction === "next" ? "next" : "previous";

	return (
		<div
			onClick={() => {
				props.setNumber(prev => {
					switch (props.direction) {
						case "prev":
							if (prev === 5) return prev;
							return (prev = prev - 5);
						case "next":
							return (prev = prev + 5);
					}
				});
			}}
		>
			<img src={arrow} alt={`Arrow ${altText} site.`} />
		</div>
		// TODO set arrows and make sites
	);
};

export default Switcher;
