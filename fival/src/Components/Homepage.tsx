import React from 'react'
import '../Static/Homepage.css'
import '../Static/SocialMedia.css'

const Homepage: React.SFC = () => {
    return (
        <div className="transition">
            <div className="indent font size-1">
                * I am passionate
                <br />
                software <span className="marker">&nbsp;engineer&nbsp;</span> and designer
                <br />
                living in Brno, Czech Republic.
            </div>
            <br />
            <a href="https://twitter.com/FValch" className="fa fa-twitter" />
            <a href="https://linkedin.com/in/filip-valchář" className="fa fa-linkedin" />
            <a href="https://github.com/XuuRee" className="fa fa-github" />
            <a href="https://www.medium.com/@FilipValchar" className="fa fa-medium" />
            <div className="font size-6">Twitter / Instagram / Goodreads / Medium</div>
            <div className="font size-6">Copyright © 2019 Filip Valchar</div>
        </div>
    )
}

export default Homepage
