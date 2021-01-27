import React from "react"
import SpringLogo from './SpringLogo.png'
import Avatar from './Avatar.jpg'
import './Avatar.css'
import './index.css'
import './ButtonBlue.css'
import './ButtonGreen.css'
import './ButtonNeutral.css'
import './ButtonPink.css'
import './ButtonYellow.css'
import './Containers.css'
import './Sections.css'

function App() {
    return (
        <div className="Wrapper">
            <div className="Center">
                <img src={SpringLogo} alt="/"/>
            </div>

            <div className="Section">
                <h1>h1. CSS</h1>
                <h2>h2. Micro</h2>
                <h3>h3. Framework</h3>
                <h4>h4. No npm & preprocessors</h4>
                <h5>h5. Cool colors</h5>
                <h6>h6. Low weight</h6>
            </div>

            <div className="Section">
                <p>p. <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam consequatur eaque ex expedita harum necessitatibus, similique tenetur veritatis voluptas. Cupiditate inventore, nulla reiciendis saepe similique sunt? Accusantium, ea possimus!</span><span>Consectetur dicta dignissimos dolor doloribus dolorum ducimus excepturi fuga fugiat harum id illum incidunt itaque labore libero, mollitia nam nemo neque optio placeat qui quis, ratione rerum tenetur velit voluptatibus?</span>
                </p>
            </div>

            <div className="Section">
                <button className="ButtonBlue">Blue</button>
                <button className="ButtonGreen">Green</button>
                <button className="ButtonNeutral">Neutral</button>
                <button className="ButtonPink">Pink</button>
                <button className="ButtonYellow">Yellow</button>
            </div>

            <div className="SectionHard">
                <img src={Avatar} className="Avatar" alt="/"/>
            </div>
        </div>
    )
}

export default App
