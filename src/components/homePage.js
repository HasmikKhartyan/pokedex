import React, { Component,  Suspense, lazy  } from "react";
import SearchField from "./searchField";
import { connect } from "react-redux";
import { getPokedex } from "../actions/index";
import AjaxLoader from "./ajaxLoader";
const PokemonContainer = React.lazy(() => import('./pokemonContainer'));

class HomePage extends Component{
	constructor(props){
		super(props);
		this.loadOnScroll = this.loadOnScroll.bind(this);
		this.componentEnd = React.createRef();
	}
	componentDidMount () {
		const { onGetPokedex, pokedex } = this.props;
		if(pokedex.length < 1){
			onGetPokedex(0);
		}
		window.addEventListener("scroll", this.loadOnScroll);
	}
	 loadOnScroll() {
		const { loading = false } = this.props;
		const { onGetPokedex , pokedex, searchKeyword} = this.props;

		if(!searchKeyword){

		const length = pokedex.length;
		const el = this.componentEnd.current;

            const rect = el.getBoundingClientRect();
            const isAtEnd = (
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            if (isAtEnd && !loading) {
                     onGetPokedex(length + 1);
            }
        }
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.loadOnScroll);
	}



	render() {
		document.body.style.background = "#EEE";
		var pokemonArr = [];
		const { pokedex, searchKeyword } = this.props;
        const pokedexData = searchKeyword ? pokedex.filter(item => item.name.includes(searchKeyword)):pokedex;
        pokedexData.forEach(function (item, index) {
			pokemonArr.push(
				<Suspense fallback={<div>Loading...</div>} key={item.url}>
				<PokemonContainer
					pokemonId={item.url.split("/")[6]}
					pokemonName={item.name}
					pokemonUrl={item.url}
				/>
				</Suspense>
			);
		});

		return (
			<div>
				<SearchField ref="searchField" />
				<div className="container " >
					<div className="row">
						{pokemonArr}
					</div>
				</div>
               <div className="col-sm-12 col-xs-12" ref={this.componentEnd}>
                    { !searchKeyword && <AjaxLoader/>}
				</div>
                }
				<div className="footer"></div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	const { pokedex: {data=[],search = [], loading} = {},search:{ searchKeyword = null }={} } = state;
	return {
		pokedex: searchKeyword ? search: data,
        loading,
        searchKeyword
	};
}
const mapDispatchToProps = dispatch => {
	return {
		onGetPokedex: (start) => {
			dispatch(getPokedex(start));
		}
	};
};

export default  connect(mapStateToProps, mapDispatchToProps,undefined, { pure: false })(HomePage);
