import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function DeleteBoard() {
    const { boardSet, hideExternal } = useContext(AppContext);
    
  return (
    <>
        <div className="delete-board">
            <h4>Delete this board?</h4>
            <p>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
            <div>
                <button>delete</button>
                <button onClick={() => { boardSet(); hideExternal(); }}>cancel</button>
            </div>
        </div>
    </>
  )
}

export default DeleteBoard;