import React from "react";

interface Props {
	errorMessage: string | null;
}
const ErrorInfo = (props: Props) => {
	return <p>{props.errorMessage}</p>;
};

export default ErrorInfo;
