import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function DeleteTask() {
    const { boardSet, hideExternal } = useContext(AppContext);

  return (
    <>
        <div className="delete-task">
            <h4>Delete this task?</h4>
            <p>Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action will remove all columns and tasks and cannot be reversed.</p>
            <div>
                <button>delete</button>
                <button onClick={() => { boardSet(); hideExternal(); }}>cancel</button>
            </div>
        </div>
    </>
  )
}

export default DeleteTask;