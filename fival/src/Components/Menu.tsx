import React, { Dispatch } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { setPageToHome, setPageToAboutMe, setPageToWork, PortfolioActions } from '../Actions/PortfolioActions'
import Submenu from './Submenu'

type MenuProps = {
    selected: string
}

type DispatchMenuProps = {
    onHomePageChange: () => void
    onAboutMePageChange: () => void
    onWorkPageChange: () => void
}

const Menu: React.SFC<MenuProps & DispatchMenuProps> = ({
    selected,
    onHomePageChange,
    onAboutMePageChange,
    onWorkPageChange,
}) => {
    return (
        <div className="font size-5">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a
                        className={selected === 'home' ? 'nav-link nav-element nav-selected' : 'nav-link nav-element'}
                        href="#"
                        onClick={onHomePageChange}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={selected === 'work' ? 'nav-link nav-element nav-selected' : 'nav-link nav-element'}
                        href="#"
                        onClick={onWorkPageChange}
                    >
                        Work
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={
                            selected === 'aboutMe' ? 'nav-link nav-element nav-selected' : 'nav-link nav-element'
                        }
                        href="#"
                        onClick={onAboutMePageChange}
                    >
                        About Me
                    </a>
                </li>
            </ul>
            {selected === 'work' && <Submenu />}
        </div>
    )
}

const mapDispatchToProps: MapDispatchToProps<DispatchMenuProps, {}> = (dispatch: Dispatch<PortfolioActions>) => ({
    onHomePageChange: () => dispatch(setPageToHome()),
    onAboutMePageChange: () => dispatch(setPageToAboutMe()),
    onWorkPageChange: () => dispatch(setPageToWork()),
})

export default connect(
    undefined,
    mapDispatchToProps
)(Menu)
