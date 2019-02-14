import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../actions/search";

class SearchField extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: "",
		};
		this.sershEl = React.createRef();
	}

	onChange = (e) => {
		const serchRes = this.sershEl.current.value;
		const { onSearch } = this.props;
		this.setState({value: serchRes});
		if (serchRes.length>3 || serchRes.length == 0) {
			onSearch(serchRes);
		}
	}

	onSubmit = (e) => {
		const { onSearch } = this.props;
		e.preventDefault();
		const serchRes = this.sershEl.current.value;
		if (serchRes) {
			onSearch(serchRes);
		}
	}

	onClick = () => {
		const { onSearch } = this.props;
		this.setState({ value: "" });
		onSearch(null);
	}

	render () {
		var classes = ["btn btn-warning sharp btn-sm ", this.props.className];
		return (
			<div className="container">
				<div  className="header">
					<div className="row">
						<div className="col-xs-12">
							<h3>Name</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-8 col-md-4">
							<form action="" method="" onSubmit={this.onSubmit} >
								<div className="input-group col-xs-10 ">
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											placeholder="Search.."
											value={this.state.value}
											onChange={this.onChange}
											ref = {this.sershEl}
										/>
									</div>
								</div>
							</form>
						</div>
						<button onClick={this.onClick} className={classes}>Reset</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { pokedex: {data=[], loading} = {}} = state;
	return {
		pokedex: data,
		loading,
	};
}
const mapDispatchToProps = dispatch => {
	return {
		onSearch: (start) => {
			dispatch(search(start));
		}
	};
};

export default  connect(mapStateToProps, mapDispatchToProps)(SearchField);
