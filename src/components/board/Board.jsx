import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import './style.css';

class Board extends React.Component 
{
    timeout;
    // constructor(props){
    //     super(props);
    // }




  
    render() {
          return (
        

            <div>
                
              {/* <h1> Lets code Music </h1>  */}
              <div>
              <AceEditor 
                mode="javascript" 
                theme="monokai"
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,}}
                  getValue={'on'}
                 />
              </div>
           </div> 
            
           
            
            )}}
        

            
    


export default Board