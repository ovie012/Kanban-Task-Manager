import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function SidebarKanban() {
  const { lightMode, whichMode, selected, select, hide, hidden, boardNames, addNewBoard } = useContext(AppContext);

  return (
    <>
      <div className="sidebar-kanban-container">
        <div className={`sidebar-kanban ${hidden ? 'hidden' : ''} ${lightMode ? 'light-mode' : ''}`}>
          <section className='logo'>
            <img className='light-logo' src={`/logo-${lightMode ? 'dark' : 'light'}.svg`} alt="logo" />
          </section>
          <section className='boards'>
            <h5>ALL BOARDS ({boardNames.length})</h5>
            {boardNames.map((item, index) => (
              <div 
                onClick={() => select(item)} 
                key={index} 
                className={`board ${item === selected ? 'active' : ''}`}
              >
                <img src="/icon-board.svg" alt="board icon" />
                <h6>{item}</h6>
              </div>
            ))}
            <div onClick={() => { addNewBoard();}} className="board create-board">
              <img src="/icon-board.svg" alt="board icon" />
              <h6>+ create new board</h6>
            </div>
          </section>
          <section onClick={whichMode} className={`display-mode ${lightMode ? 'light' : ''}`}>
            <img src="/icon-light-theme.svg" alt="light mode" />
            <span></span>
            <img src="/icon-dark-theme.svg" alt="dark mode" />
          </section>
          <section onClick={hide} className="board sidebar">
            <img src="/icon-hide-sidebar.svg" alt="hide sidebar logo" />
            <h6>hide sidebar</h6>
          </section>
          <section onClick={hide} className={`show-sidebar ${hidden ? 'active' : ''}`}>
            <img src="/icon-show-sidebar.svg" alt="show sidebar" />
          </section>
        </div>
      </div>
    </>
  )
}

export default SidebarKanban;