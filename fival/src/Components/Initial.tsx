import React, { Dispatch } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { setPageToHome, StateActions } from '../Actions/StateActions';
import "../Static/Initial.css";
import loading from "../Images/loading.svg";

type DispatchHomepage = {
	onHomePageChange: () => void;
};

class Initial extends React.Component<DispatchHomepage> {

	componentDidMount() {
	  setTimeout(() => this.props.onHomePageChange(), 2500)
	}

	render() {
		return <img className="loading" src={loading} />;
	}
}

const mapDispatchToProps: MapDispatchToProps<DispatchHomepage, {}> = (dispatch: Dispatch<StateActions>) => ({
	onHomePageChange: () => dispatch(setPageToHome()),
});

export default connect(undefined, mapDispatchToProps)(Initial);