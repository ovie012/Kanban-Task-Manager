import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function AddNewColumn() {
  const { editTask } = useContext(AppContext)

  return (
    <>
        <div className="add-new-column">
            <h4>This board is empty. Create a new column to get started.</h4>
            <button onClick={editTask}>+ add new column</button>
        </div>
    </>
  )
}

export default AddNewColumn;