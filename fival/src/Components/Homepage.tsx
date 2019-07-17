import React from 'react'
import '../Static/Homepage.css'

const Homepage: React.SFC = () => {
    return (
        <div className="transition">
            <div className="indent font size-1">
                * Lorem ipsum dolor sit amet,
                <br />
                consectetuer adipiscing elit
                <br />
                malesuada fames ac turpis egestas.
            </div>
            <br />
            <div className="font size-6">Twitter / Instagram / Goodreads / Medium</div>
            <div className="font size-6">Copyright © 2019 Filip Valchar</div>
        </div>
    )
}

export default Homepage
