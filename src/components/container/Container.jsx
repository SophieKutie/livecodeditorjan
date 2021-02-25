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
                {/* <div className="color-picker-container">
                    <input type="color"></input>
                </div> */}

                <div>
                <ul className="nav">
                <li >
                <button className='go' onClick={this.go}>play</button> 
                </li>

                {/* Add onClick methods for stop, pause, refresh */}
                <li >
                <button className='go' >pause</button> 
                </li>

                <li >
                <button className='go' >stop</button> 
                </li>

                <li >
                <button className='go' >undo</button> 
                </li >
                </ul>
                </div>

                <div class="board-container"> 
                <Board></Board> 
                </div>
                
            
                {/* <div class="ace_scrollbar ace_scrollbar-v" 
                style={{display: "visible",
                    width: "22px",
                    bottom: "0px"}}>

                <div class="ace_scrollbar-inner" 
                    style={{width: "22px",
                    height: "105px"}}>

                <div class="ace_scrollbar ace_scrollbar-h" 
                style={{display: "visible", 
                height: "22px", 
                left: "43px", 
                right: "0px"}}> */}

              
                {/* <div class="ace_scrollbar-inner" 
                style={{height: "22px", 
                width: "700px"}}>
                 */}

                <div>
                    <ul id="messages"></ul>
                    <form id="form" action="">
                    <input id="input" autocomplete="off" /><button>Send</button>
                    </form>
                </div>
        
            </div>

        )

    }

    
}



export default Container