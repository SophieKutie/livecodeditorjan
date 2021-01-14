import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import io from 'socket.io-client';

// import 'brace/mode/javascript';
// import 'brace/theme/monokai';
import './style.css';

class Board extends React.Component 
{
    timeout;
    socket = io.connect("http://localhost:5000");

    constructor(props){
        super(props);

        // this.socket.on("canvas-data", function(data){
            //   var 

        // })
        
    }
    
    render() {
      let text =
      '\n  "author": "musicode_hybrid team",\n  ' +
      '"version": """\n  "script": """\n  ';
    
          return ( 
  
          <div>
            <div>
              <AceEditor 
                mode="javascript" 
                theme="monokai"
                width="100"
                fontSize="18px"
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                }}
                  name="UNIQUE_ID_OF_DIV"
                  editorProps={{ $blockScrolling: false }}
                  onChange={(value, stat) => { // to get code editor value (array of text)
                    // if(root.timeout != undefined) clearTimeout(root.timeout);
                    // root.timeout = setTimeout(function(){
                    //   onchange;
                    // }, 1000)
                    console.log("onChange", value, stat);
                  }}
                  value={text}
              
                 />
             </div>
            
          </div> 
            
           
            
            )}}
        

            
    


export default Board