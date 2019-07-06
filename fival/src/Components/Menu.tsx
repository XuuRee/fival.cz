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
		<React.Fragment>
		<div>
		<ul className="nav justify-content-end">
  			<li className="nav-item">
    			<a className="nav-link menu-item menu-item-selected font" href="#" onClick={onHomePageChange}>Home</a>
  			</li>
  			<li className="nav-item">
    			<a className="nav-link menu-item font" href="#" onClick={onWorkPageChange}>Work</a>
  			</li>
			<li className="nav-item">
    			<a className="nav-link menu-item font" href="#" onClick={onAboutMePageChange}>About Me</a>
  			</li>
		</ul>
		</div>
		<div>
			<ul className="nav justify-content-end">
			<li className="nav-item">
    			<a className="nav-link menu-item font" href="#" onClick={onWorkPageChange}>Project 1</a>
  			</li>
			<li className="nav-item">
    			<a className="nav-link menu-item font" href="#" onClick={onAboutMePageChange}>Project 2</a>
  			</li>
			<li className="nav-item">
    			<a className="nav-link menu-item font" href="#" onClick={onAboutMePageChange}>Project 3</a>
  			</li>
			<li className="nav-item">
    			<a className="nav-link menu-item font" href="#" onClick={onAboutMePageChange}>Project 4</a>
  			</li>
			</ul>
		</div>
		</React.Fragment>
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