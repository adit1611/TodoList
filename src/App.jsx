import React from 'react'
import { ThemeProvider } from './Theme'; 
const App = () => {
  return (
    <ThemeProvider>
      <h1 className="text-3xl bg-sky-400 font-bold underline">
    Hello world!
      </h1>
      </ThemeProvider>
    );
  };

export default App
