import React from "react"
import SpringLogo from './SpringLogo.png'
import './index1.css'
import './ButtonBlue.css'
import './ButtonGreen.css'
import './ButtonNeutral.css'
import './ButtonPink.css'
import './ButtonYellow.css'
import './Containers.css'

function App() {
    return (
        <div className="Wrapper">
                <div>
                    <img src={SpringLogo} alt="/"/>
                </div>

                <button className="ButtonBlue">Blue</button>
                <button className="ButtonGreen">Green</button>
                <button className="ButtonNeutral">Neutral</button>
                <button className="ButtonPink">Pink</button>
                <button className="ButtonYellow">Yellow</button>
                <div className="Section">Block</div>
                <div className="SectionHard">BlockHard</div>
        </div>
    )
}

export default App
