import React from 'react';

type MenuProps = {}

type DispatchMenuProps = {};

const Submenu: React.SFC<MenuProps & DispatchMenuProps> = ({ }) => { 
	return (
		<div className="transition">
			<ul className="nav justify-content-end">
				<li className="nav-item">
    				<a className="nav-link nav-element" href="#">Project 1</a>
  				</li>
				<li className="nav-item">
    				<a className="nav-link nav-element" href="#">Project 2</a>
  				</li>
				<li className="nav-item">
    				<a className="nav-link nav-element" href="#">Project 3</a>
  				</li>
				<li className="nav-item">
    				<a className="nav-link nav-element" href="#">Project 4</a>
  				</li>
			</ul>
		</div>
	); 
};

export default Submenu;