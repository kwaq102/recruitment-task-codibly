import React from "react";

interface Props {
	errorMessage: string | null;
}
const ErrorInfo = (props: Props) => {
	return <p className="homePage__errorInfo">{props.errorMessage}</p>;
};

export default ErrorInfo;
