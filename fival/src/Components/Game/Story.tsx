import React from 'react'
import Menu from './Menu'
import Illustration from './Illustration'
import Chapter from './Chapter'

const Story: React.SFC = () => {
    return (
        <div className="story">
            <div className="row no-gutters">
                <div className="col-4">
                    <Illustration />
                </div>
                <div className="col-8">
                    <Menu />
                    <Chapter />
                </div>
            </div>
        </div>
    )
}

export default Story
