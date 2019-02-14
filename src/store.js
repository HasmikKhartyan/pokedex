import {createStore, combineReducers, applyMiddleware, compose,} from "redux";
import thunk from "redux-thunk";
import pokedexReducer from "./reducers/index";
import pokemonDetail from "./reducers/detail";
import search from "./reducers/search";


const reducer = combineReducers({
	pokedex: pokedexReducer,
    details: pokemonDetail,
    search
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;