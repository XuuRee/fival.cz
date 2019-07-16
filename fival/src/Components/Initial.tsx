import React, { Dispatch } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { setPageToHome, PortfolioActions } from '../Actions/PortfolioActions';
import "../Static/Initial.css";

type DispatchHomepage = {
	onHomePageChange: () => void;
};

class Initial extends React.Component<DispatchHomepage> {
	state = {
		word: ''
	}

	componentDidMount() {
		const sentence = ['I am ', 'software ', 'engineer. ', 'Welcome!', ' '];

		let timer = 250;
		sentence.map(phrase => {
			setTimeout(() => {
				this.setState({ word: phrase })
			}, timer);
			timer += 750;
		});

	  setTimeout(() => this.props.onHomePageChange(), timer)
	}

	render() {
		return (
			<div className="transition">
				<div className="center font size-1">
					{this.state.word}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps: MapDispatchToProps<DispatchHomepage, {}> = (dispatch: Dispatch<PortfolioActions>) => ({
	onHomePageChange: () => dispatch(setPageToHome()),
});

export default connect(undefined, mapDispatchToProps)(Initial);