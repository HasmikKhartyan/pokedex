import React from "react";
import loading from "../loading.svg";

const AjaxLoader = ()=> {
	var style = {
		top: "50%",
		left: "50%",
		transform: "translateX( -50%)",
		position: "absolute"
	};

	return (
		<img src={loading} alt="loading" style={style} />
	);
};
export default AjaxLoader;