import React, { Dispatch } from 'react'
import { MapDispatchToProps, connect } from 'react-redux'
import { GameActions, turnOffTutorial } from '../../Actions/GameActions'

type DispatchTutorialProps = {
    onTutorialChange: () => void
}

const Tutorial: React.SFC<DispatchTutorialProps> = ({ onTutorialChange }) => {
    return (
        <div className="center">
            <div className="tutorial">
                <h3>Welcome!</h3>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Fusce nibh.
                </p>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Aliquam erat volutpat.
                </p>
                <br />
                {/* Continue the game */}
                <button type="button" className="btn btn-success" onClick={onTutorialChange}>
                    Play game
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps: MapDispatchToProps<DispatchTutorialProps, {}> = (dispatch: Dispatch<GameActions>) => ({
    onTutorialChange: () => dispatch(turnOffTutorial()),
})

export default connect(
    undefined,
    mapDispatchToProps
)(Tutorial)
