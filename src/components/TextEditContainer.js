//https://github.com/ethanryan/textedit-app/blob/master/src/components/QuillEditor.js


// import React, { Component, Fragment } from 'react'
// import marked from 'marked'
// import DOMPurify from 'dompurify'
// import AceEditor from 'react-ace'

// //import Navbar from './components/Navbar/Navbar'

// import 'ace-builds/src-noconflict/mode-markdown'
// import 'ace-builds/src-noconflict/theme-github'

// import './styles.css'

// class TextEditContainer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             editorContent: '',
//         }

//         this.onChange = this.onChange.bind(this)
//     }

//     onChange = (value) => {
//         localStorage.setItem('editorContent', value)
//         this.setState({
//             editorContent: value,
//         })
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         if (this.state.editorContent !== nextState.editorContent) {
//             return true
//         } else {
//             return false
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             editorContent: localStorage.getItem('editorContent') || '',
//         })
//     }

//     render() {
//         const editorStyles = {
//             height: '100vh',
//             width: 'auto',
//         }

//         return (
//             <Fragment>
//                 {/* <Navbar /> */}
//                 <div className="App">
//                     <AceEditor
//                         fontSize={12}
//                         mode="markdown"
//                         theme="github"
//                         name="editor"
//                         style={editorStyles}
//                         value={this.state.editorContent}
//                         onChange={this.onChange}
//                         editorProps={{ $blockScrolling: true }}
//                     />
//                     <div
//                         id="preview"
//                         dangerouslySetInnerHTML={{
//                             __html: DOMPurify.sanitize(
//                                 marked(this.state.editorContent)
//                             ),
//                         }}
//                     />
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default TextEditContainer




import React, { Component } from "react";
import AceEditor from 'react-ace';
import ReactAce from 'react-ace-editor';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
//import io from 'socket.io-client';

//import socketIOClient from "socket.io-client";




// import 'brace/mode/javascript';
// import 'brace/theme/monokai';
//import 'style.css' from './components/board/style.css';
//const editor= ace.edit("ace-editor");
//var text =editor.getSession().getValue();
  //textarea.val(text);
  //alert(text);


//const socket = io.connect("http://localhost:3000");

class TextEditContainer extends React.Component 
{    
    constructor(props){
        super(props);
       this.state = {
         value: ''}};
         //this.onChange = this.onChange.bind(this);
       
    
      // https://www.npmjs.com/package/react-ace-editor  try this code for ReactAce
     // sending sockets
  send = () => {
   // const socket = socketIOClient("localhost:4000");
   // socket.emit('change color', this.state.value) // change 'red' to this.state.color
  }

  // adding the function
  setEditor = (value) => {
   this.setState({ value })
 }
    
  
    
 
    // editor.getSession().on('change', function() {
    //   textarea.val(editor.getSession().getValue());
    // });
 
    //onChange(selection) {
     // const content = onSelectionChange.editor.session.EditSession.getTextRange(selection.getRange());
     // this.state.value = selection;
     // alert(this.state.value);
      //console.log("i've loaded");
  
        
        // onMessageSubmit = () => {
        //     //console.log('can u evn see me?')
        //     socket.emit("chat message", this.state.msg);
        //     this.setState(this.state.msg );
        //     //console.log('can u evn see me?')
        //   };
        
        // renderChat() {
        //     const { chat } = this.state;
            //return chat.map(({ id, msg }, idx) => (
              //<div key={idx}>
               // <span style={{ color: "green" }}>{id}: </span>
        
                //<span>{msg}</span>
              //</div>
            //));
       // }
        
          
  componentDidMount(){
   // const socket = socketIOClient("localhost:3000");
    setInterval(this.send(), 1000)
    //socket.on('change color', (col) => {
    // document.body.style.board = col
    //})
  }

    render() {
     //const socket = socketIOClient("localhost:3000");
      // text =
      // '\n  "author": "musicode_hybrid team",\n  ' +
      //  '"version": """\n  "script": """\n  ';

     
      return ( 
   
      
    <div >
    {/* className = "editor" >  */}
      <form>
              <AceEditor 
                mode="javascript" 
                theme="monokai"
                width="100"
                fontSize="18px"
                fontColor="white"
                ref="ace"
                name="editor"
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                }}
                  
                  editorProps={{ $blockScrolling: Infinity }}
                  onChange={value => { 
                   // this.setEditor(value);
                    console.log("onChange", value);
                    
                    //editor.focus(); 
                    //editor.getSession().getTextRange();
                    //console.log("We've loaded!");
                    //editor.getSession().setUseWrapMode(true); 
                  }}
                  //onChange={(value, stat) => { // to get code editor value (array of text)
                    
                  //  console.log("onChange", value, stat);
                    
                 // }}
                  //onChange = {
                   // this.onChange
                   // console.log("onChange", this.state.value)
                    
                   // this.state.value
                 //}
                  placeholder={
                    '\n  "author": "musicode_hybrid team",\n  ' +
       '"version": """\n  "script": """\n  '
     
                  }
                  code={'\n "const synth = new Tone.Synth().toDestination();",\n  ' +
                  '"const now = Tone.now()"\n' +                 
                   '"synth.triggerAttack("C4", now)"\n'

                  }
                 
               
                 />
                 </form>
                 {/* <button onClick={() => this.send() }>Share </button>
                 <button  onClick={() => this.setEditor} h={
                console.log("onChange")} >Value</button> */}
                 {/* <button id="red" onClick={() => this.setEditor('red')}>Red</button> */}

    </div>
                 
     
             
            
      )     
                  
            
      
     }        
    }
 

    export default TextEditContainer
