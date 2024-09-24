import {React, useState} from 'react';
import Navbar from './Navbar'; 
import Content from './Content'
import { ThemeProvider } from './Theme'; 

const App = () => {

  const [isList, setIsList] = useState(true);

  const toggleLayout = () => {
    setIsList(!isList); 
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar toggleLayout={toggleLayout} isList={isList} />
        <Content isList={isList} /> 
        <div className='m-52'>
          <h1 className='text-6xl bg-sky-400 '>Hello Sweetheart ❤️😘😘❤️</h1>
        </div>
      </div>
    </ThemeProvider>
  );
};


export default App;
