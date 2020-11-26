import React from 'react';
import './App.css';
import SplitterLayout from 'react-splitter-layout';
import Editor from '@monaco-editor/react';
import 'react-splitter-layout/lib/index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        codepen_clone (leularia)&nbsp;&nbsp;&nbsp;v.0.0.0
      </header>
      <SplitterLayout vertical>

        <SplitterLayout primaryIndex={1} percentage>
          <div className="my-pane">
            <h3>HTML</h3>
            <Editor
              language="html"
              value={"<!-- write your HTML code here -->"}
              // editorDidMount={handleEditorDidMount}
            />
          </div>
          <SplitterLayout percentage>
            <div className="my-pane">
              <h3>CSS</h3>
              <Editor
                height="100%"
                language="css"
                value={"/* write your CSS code here */"}
                // editorDidMount={handleEditorDidMount}
              />
            </div>
            <div className="my-pane">
              <h3>JavaScript</h3>
              <Editor
                language="javascript"
                value={"// write your HTML code here"}
                // editorDidMount={handleEditorDidMount}
              />
            </div>
          </SplitterLayout>
         </SplitterLayout>

        <SplitterLayout>
          <div>
            <h1>Ouput</h1>
          </div>
        </SplitterLayout>

      </SplitterLayout>
    </div>
  );
}

export default App;
