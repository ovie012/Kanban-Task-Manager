import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function NewBoard() {
    const { hideExternal } = useContext(AppContext);
  return (
    <>
        <div className="new-board">
            <img onClick={hideExternal} className='cancel' src="/icon-cross.svg" alt="cancel" />
            <h3>add new board</h3>
            <form action="POST">
                <label>board name</label>
                <input type="text" placeholder='e.g. web design' />
            </form>
            <form action="POST">
                <label>board columns</label>
                <div>
                    <input type="text" />
                    <img src="/icon-cross.svg" alt="cancel" />
                </div>
            </form>
            <button>+ add new column</button>
            <button>create new board</button>
        </div>
    </>
  )
}

export default NewBoard;