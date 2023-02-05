import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductData } from "../../types/products-data";
import close from "../../images/x-white.svg";

interface Props {
	product: ProductData;
	modal: boolean;
	setModal: Dispatch<SetStateAction<boolean>>;
}

const ProductInfo = (props: Props) => {
	const { id, name, year, color, pantone_value } = props.product;
	const [content, setContent] = useState(false);

	const backgroundColorItem = { backgroundColor: props.product.color };

	useEffect(() => {
		setContent(true);
	}, []);

	const hideModal = () => {
		setContent(false);
		setTimeout(() => props.setModal(false), 700);
	};

	return (
		<div className={`modal ${content ? "show" : "hide"}`}>
			<span className="modal__hide" onClick={hideModal}>
				<img src={close} alt="close icon" className="modal__hide-icon" />
			</span>

			<div className={`modal__content ${content ? "show" : "hide"}`}>
				<h3 className="modal__content-heading" style={backgroundColorItem}>
					Product information
				</h3>
				<p className="modal__content-property">
					<span className="bold">id:</span> {id}
				</p>
				<p className="modal__content-property">
					<span className="bold">name:</span> {name}
				</p>
				<p className="modal__content-property">
					<span className="bold">year:</span> {year}
				</p>
				<p className="modal__content-property">
					<span className="bold">color:</span>{" "}
					<span style={backgroundColorItem}>{color}</span>
				</p>
				<p className="modal__content-property">
					<span className="bold">pantone value:</span> {pantone_value}
				</p>
				<button
					className="modal__hide-btn"
					onClick={hideModal}
					style={backgroundColorItem}
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default ProductInfo;
