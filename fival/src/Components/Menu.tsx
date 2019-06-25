import React, { Dispatch } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { setPageToHome, setPageToAboutMe, setPageToWork, StateActions } from '../Actions/StateActions';

type MenuProps = {
	selected: string
}

type DispatchMenuProps = {
	onHomePageChange: () => void;
	onAboutMePageChange: () => void;
	onWorkPageChange: () => void;
};

const Menu: React.SFC<MenuProps & DispatchMenuProps> = ({ selected, onHomePageChange, onAboutMePageChange, onWorkPageChange }) => { 
	return (
		<ul className="nav justify-content-end">
  			<li className="nav-item">
    			<a className="nav-link menu-item" href="#" onClick={onHomePageChange}>Home</a>
  			</li>
  			<li className="nav-item">
    			<a className="nav-link menu-item" href="#" onClick={onAboutMePageChange}>About me</a>
  			</li>
  			<li className="nav-item">
    			<a className="nav-link menu-item" href="#" onClick={onWorkPageChange}>Work</a>
  			</li>
		</ul>
	); 
};

const mapDispatchToProps: MapDispatchToProps<DispatchMenuProps, {}> = (dispatch: Dispatch<StateActions>) => ({
	onHomePageChange: () => dispatch(setPageToHome()),
	onAboutMePageChange: () => dispatch(setPageToAboutMe()),
	onWorkPageChange: () => dispatch(setPageToWork())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Menu);