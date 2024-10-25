import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function Header() {
    const { lightMode, addNewTask, boardSet, boardSettings, editBoard, deleteBoard, editTask } = useContext(AppContext)

  return (
    <>
        <div className="header">
            <section className="header-logo">
                <img className='light-logo' src={`/logo-${lightMode ? 'dark' : 'light'}.svg`} alt="logo" />
            </section>
            <h1 onClick={editTask}>platform launch</h1> 
            {/* remove the onClick after youre done setting the edit task to its proper channel */}
            <section className="buttons">
                <button onClick={() => { addNewTask(); }}>+ add new task</button>
                <img onClick={() => {boardSet();}} src="/icon-vertical-ellipsis.svg" alt="click for more" />
            </section>
            {boardSettings.board && 
                <section className="board-settings">
                    <h5 onClick={editBoard}>edit board</h5>
                    <h6 onClick={deleteBoard}>delete board</h6>
                </section>
            }
        </div>
    </>
  )
}

export default Header;