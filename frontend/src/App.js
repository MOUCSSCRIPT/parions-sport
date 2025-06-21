import React from 'react';
import './App.css';
import { Header, LeftSidebar, RightSidebar, LotoFootGrid } from './components';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <Header />
      
      <div className="flex">
        <LeftSidebar />
        
        <main className="flex-1 min-h-screen">
          <LotoFootGrid />
        </main>
        
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;