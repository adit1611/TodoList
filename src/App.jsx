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
      <div className="h-screen flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className={`fixed md:relative transition-transform duration-300 ${isSlidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          {/* Your Sidebar component here */}
        </aside>
        
        {/* Main Content Area */}
        <div className={`flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-y-auto ${isSlidebarOpen ? 'ml-0 md:ml-64' : 'ml-0 md:ml-0'}`}>
          {/* Navbar to control layout and sidebar */}
          <Navbar toggleLayout={toggleLayout} isList={isList} toggleSlidebar={toggleSlidebar} />

          {/* Main content that includes the Slidebar */}
          <Content isList={isList} isSlidebarOpen={isSlidebarOpen} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
