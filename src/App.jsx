import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Content from './Content';
import { ThemeProvider } from './Theme'; 
import Slidebar from './Slidebar';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTodo, setShowTodo] = useState(true);
  const [isList, setIsList] = useState(true);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLayout = () => {
    setIsList(prevIsList => !prevIsList);
};


  return (
    <ThemeProvider>
      <div className="h-screen flex">
        {/* Slidebar */}
        
        
        <div className={`flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-y-auto ${isOpen ? 'ml-64' : 'ml-0'}`}>
          {/* Navbar controlling layout toggle */}
          <Navbar toggleLayout={toggleLayout} isList={isList} toggleSidebar={toggleSidebar} />
          {/* Main content with toggleable layout */}
          <div className='flex'>
            
          <Content showTodo={true} isList={isList} /> {/* Pass isList as a prop */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;