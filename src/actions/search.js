import {SEARCH_SUCCESS} from "./types";
import axios from "axios";
import {getPokedex} from "./index";

export const search = (keword ) => {
	return (dispatch, getState ) => {
		if(keword && getState().pokedex.search.length==0 ) {
			dispatch(getPokedex(0, 185, true));
		}
		dispatch(searchSuccess(keword));
	};
};

const searchSuccess = keyword => ({
	type: SEARCH_SUCCESS,
	payload: keyword
});


