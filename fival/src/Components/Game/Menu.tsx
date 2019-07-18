import React, { Dispatch } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { turnOnTutorial, GameActions } from '../../Actions/GameActions'

type DispatchMenuProps = {
    onTutorialChange: () => void
}

const Menu: React.SFC<DispatchMenuProps> = ({ onTutorialChange }) => {
    return (
        <div className="nav-game">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <button type="button" className="btn btn-secondary mr-2" onClick={onTutorialChange}>
                        Tutorial
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-warning mr-2">
                        Save
                        {/* <span className="glyphicon glyphicon-floppy-disk" /> */}
                    </button>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps: MapDispatchToProps<DispatchMenuProps, {}> = (dispatch: Dispatch<GameActions>) => ({
    onTutorialChange: () => dispatch(turnOnTutorial()),
})

export default connect(
    undefined,
    mapDispatchToProps
)(Menu)
