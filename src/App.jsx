import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Content from './Content';
import { ThemeProvider } from './Theme'; // Optional if you have a ThemeProvider

const App = () => {
  const [isSlidebarOpen, setSlidebarOpen] = useState(false); // State to track slidebar visibility
  
  const [isList, setIsList] = useState(true); // State to track list/grid view

  // Toggle sidebar visibility
  const toggleSlidebar = () => {
    setSlidebarOpen(!isSlidebarOpen);
  };

 

  // Toggle between list and grid layout
  const toggleLayout = () => {
    setIsList(prevIsList => !prevIsList);
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex">
        {/* Main Content Area */}
        <div className={`flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-y-auto`}>
          {/* Navbar to control layout and sidebar */}
          <Navbar toggleLayout={toggleLayout} isList={isList} toggleSlidebar={toggleSlidebar} />
          
          {/* Main content that includes the Slidebar */}
          <Content isList={isList} isSlidebarOpen={isSlidebarOpen}/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
