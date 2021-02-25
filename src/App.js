import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container.jsx';
import TextEditContainer from './components/TextEditContainer.js';


/**
 * Original code starting point for livecodeditorjan
 * Using components
 * /
// function App() {
//   return (
//     <Container/>      
//   );
// }

/**
 * 20th Feb Just testing Darwin Tech's build a
 * chat app solution on youtube.
 */

import React, { useState, useEffect, setState } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import './App.css'
//import TextEditContainer from './components/TextEditContainer';

import AceEditor from 'react-ace';
import ReactAce from 'react-ace-editor';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import ace from 'ace-builds/src-noconflict/ace';
import "ace-builds/webpack-resolver";





const socket = io.connect('http://localhost:4000')

function App() {
  const [state, setState] = useState({ editorText: '', name: '' })
  const [chat, setChat] = useState([])
  //const [text, setText ] = useState([])    //for editor text state to follow name to code log as well


   useEffect(() => {
    socket.on("editorText", ({ name, editorText }) => {
      setChat([...chat, { name, editorText }])
    })
  }, [state])

  const onTextChange = e => {
    setState({ ... state, [e.target.name]: e.target.value })
  }



  const onEditorTextChange  = (e) => {
   const text  = //document.getElementsByClassName("ace_line")[0].innerHTML;//
                // ace.edit("editor").session.getValue()
     ace.edit("editorText").session.getLine(1);
    setState({ ... state, [text]: e.target.value})
   // console.log(e, text) 
    //return(text)
  }


  const onMessageSubmit = e => {
    e.preventDefault()
    const { name, editorText } = state
    socket.emit('editorText', { name, editorText })
    setState({ editorText: '', name })
  }

  const renderChat = () => {
    return chat.map(({ name, editorText },  index) => (
      <div key={index}>
        <h3>
          {name}: <span>{editorText}</span> 
          <AceEditor
            mode="javascript" 
            theme="monokai"
            width="100"
            value={name}
          /> 
           
        </h3>
      </div>
    ))
  }

  return (

    <div>
     {/* <div className = "TextEditContainer-style"> 
       <TextEditContainer></TextEditContainer>
     </div> */}
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Code away!</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div >
          <AceEditor
            name="editorText"
            id="outlined-multiline-static"
            variant="outlined"
            label="EditorText"
            mode="javascript" 
            theme="monokai"
            width="100"
            //fontSize="18px"
            fontColor="grey"
            setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: true,
                  showLineNumbers: true,
                }}
                  
            editorProps={{ $blockScrolling: Infinity }}
            onChange={e => onEditorTextChange(e)}  // make new method
            value={state.editorText}
           // onChangeText={e => setText(Text(e))}
          />
        </div>
        <button>Let user2 have a go</button>
      </form>
      <div className="render-chat">
        <h1>Code Log</h1>
        {renderChat()}
      </div>
      
    </div>
  </div>
  )
}



export default App;
