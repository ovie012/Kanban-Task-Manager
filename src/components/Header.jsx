import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function Header() {
    const { lightMode, addNewTask, boardSet, boardSettings, editBoard, deleteBoard, hidden, hide, editTask, editColumn, } = useContext(AppContext)

  return (
    <>
        <div className="header">
            <section className="header-logo">
                <img className='light-logo' src={`/logo-${lightMode ? 'dark' : 'light'}.svg`} alt="logo" />
            </section>
            <h1
             onClick={hide}
            //  onClick={editTask}
            > <img src="logo-mobile.svg" alt="logo" /> platform launch <img src={`/icon-chevron-${hidden ? 'up' : 'down'}.svg`} alt="sidebar" /> </h1> 
            {/* remove the onClick after youre done setting the edit task to its proper channel */}
            <section className="buttons">
                <button onClick={() => { addNewTask(); }}>+ <span> add new task</span></button>
                <img onClick={() => {boardSet();}} src="/icon-vertical-ellipsis.svg" alt="click for more" />
            </section>
            {boardSettings.board && 
                <section className="board-settings">
                    <h5 onClick={editColumn}>edit board</h5>
                    <h6 onClick={deleteBoard}>delete board</h6>
                </section>
            }
        </div>
    </>
  )
}

export default Header;