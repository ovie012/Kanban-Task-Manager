import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';
import NewBoard from './NewBoard';
import NewTask from './NewTask';
import EditBoard from './EditBoard';
import DeleteBoard from './DeleteBoard';

function Externals() {
  const { externals } = useContext(AppContext);

  return (
    <>
        <div className="externals">
            {externals.newBoard && <NewBoard />}
            {externals.newTask && <NewTask />}
            {externals.deleteBoard && <DeleteBoard />}
            {externals.editBoard && <EditBoard />}
        </div>
    </>
  )
}

export default Externals;