import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { connect } from "react-redux";
// import { getPokedex } from "./actions";
import HomePage from "./components/homePage";
import DetailsPage from "./components/detailsPage";

import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

class App extends Component {
	// componentDidMount(){
	//    const { onGetPokedex } = this.props;
	// 	onGetPokedex(1,12);
	// }

	render() {
		// const { pokedex } = this.props;
		// var pokemonArr = [];
		// pokedex.forEach(function (item, index) {
		// 	console.log(item);
		// 	pokemonArr.push(
		// 		<PokemonContainer
		// 			key={index}
		// 			pokemonId={item.data.id}
		// 			pokemonName={item.data.name}
		// 			pokemonImgUrl={"http://pokeapi.co/media/img/" + item.data.id + ".png"}
		// 			pokemonType={item.data.types}
		// 			detailsUrl={"/pokemons/" + item.data.id}
		// 		/>
		// 	);
		// });
		// console.log(pokemonArr,"555555555555");
		// name: data.name,
		//     type: data.types,
		//     id: data.pkdx_id,
		//     imgUrl: "http://pokeapi.co/media/img/" + data.pkdx_id + ".png",
		// //     detailsUrl: "/pokemons/" + data.pkdx_id
		// var margin = { marginTop: 30 };
		// var loaderStyle = { margin: "0 auto", display: "block" };
		return (
			<Router>
				<Switch>
					<Route path="/pokemons" component={HomePage} exact />
					<Route path="/pokemons/:pokemonId" component={DetailsPage} />
					<Redirect to="/pokemons" />
				</Switch>
			</Router>
		);
	}
}
// function mapStateToProps(state) {
// 	const { pokedex: {data=[]} = {} } = state;
// 	return {
// 		pokedex: data
// 	};
// }
// const mapDispatchToProps = dispatch => {
// 	return {
// 		onGetPokedex: (start, end) => {
// 			dispatch(getPokedex(start, end));
// 		}
// 	};
// };

// export default  connect(mapStateToProps, mapDispatchToProps)(App);
export default  App;