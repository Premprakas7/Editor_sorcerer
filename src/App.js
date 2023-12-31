import React, { useState } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

function App() {
  const _contentState = ContentState.createFromText('Type here');
  const raw = convertToRaw(_contentState);  
  const [contentState, setContentState] = useState(raw); 
  
  return (
    <div className="App">
      <header className="App-header">
        Text Editor
      </header>
      <Editor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  )
}

export default App;