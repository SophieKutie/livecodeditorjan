import React from 'react';
import {Helmet} from "react-helmet";
import * as Tone from "tone";
import Board from '../board/Board';
import './style.css'; 

class Container extends React.Component


{ 
    timeout;
    constructor(props) {  
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now()
        super(props)
       // this.go = this.go.bind(this)
    }

    componentDidMount() {
       // this.go();
    }
    
    
    go()
    {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
     //alert('go!');
     console.log('The button was clicked.');
     // trigger the attack immediately
     synth.triggerAttack("C4", now)
     // wait one second before triggering the release
     //synth.triggerRelease(now + 1)
    }
 
    render() {

        return (
            <div className="container">
                <div className="color-picker-container">
                    <input type="color"></input>
                </div>

                <div >
                <button className='go' onClick={this.go}>play</button> 
                </div>

                <div class="board-container"> 
                <Board></Board> 
                </div>


            </div>
        )

    }

    
}



export default Container