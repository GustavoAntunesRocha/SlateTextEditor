// Import React dependencies.
import React, { useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import logo from './logo.svg';
import './App.css';
import { TextEditor } from './components'

const App = () => {
  return (
    <div className="App">
      <TextEditor />
    </div>
  )
}

export default App;
