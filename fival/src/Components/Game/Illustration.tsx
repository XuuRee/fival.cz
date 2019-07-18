import React from 'react'
import '../../Static/Illustration.css'

const Illustration: React.SFC = () => {
    // choose right picture (picture1, picture2...) according to chapter name (or something else)
    return (
        <div className="illustration picture1">
            <h3 className="p-4">Chapter 1</h3>
        </div>
    )
}

export default Illustration
