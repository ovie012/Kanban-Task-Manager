import React, { useContext } from 'react';
import './App.css';
import { AppProvider, AppContext } from './AppProvider';
import Header from './components/Header';
import SidebarKanBan from './components/SidebarKanban';
import Column from './components/Column';
import Externals from './components/Externals';

function InnerApp () {
  const { lightMode, shownExternal } = useContext(AppContext);
  //i created this inner app only because i need to use the app context in the root app, normally it isn't needed, just in scenarios like this 

  return (
      <>
        <div className={`container ${lightMode ? 'light-mode' : ''}`}>
          <Header />
          <SidebarKanBan />
          <Column />
          {shownExternal && <Externals />}
        </div>  
      </>
    )
}

function App() {

  return (
    <>
      <AppProvider>
        <InnerApp />
      </AppProvider>
    </>
  );
}

export default App


// LEGEND CODED THIS