import {SEARCH_STARTED, SEARCH_SUCCESS, SEARCH_FAILURE} from "../actions/types";

const initialState = {
	searchKeyword: null,
};

export default function pokedexReducer(state = initialState, action) {
	switch (action.type) {
	case SEARCH_STARTED:
		return {
			...state,
			loading: true
		};
	case SEARCH_SUCCESS:
		return {
			...state,
			searchKeyword:action.payload
		};
	case SEARCH_FAILURE:
		return {
			...state,
			loading: false,
			error: action.payload.error
		};

	default:
		return state;
	}
}
