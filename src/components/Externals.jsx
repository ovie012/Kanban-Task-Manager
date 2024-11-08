import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';
import NewBoard from './NewBoard';
import NewTask from './NewTask';
import EditBoard from './EditBoard';
import DeleteBoard from './DeleteBoard';
import EditTask from './EditTask';
import EditColumn from './EditColumn';
import DeleteTask from './DeleteTask';
import SidebarKanban from './SidebarKanban';

function Externals() {
  const { externals } = useContext(AppContext);

  return (
    <>
        <div className="externals">
            {externals.newBoard && <NewBoard />}
            {externals.newTask && <NewTask />}
            {externals.deleteBoard && <DeleteBoard />}
            {externals.editBoard && <EditBoard />}
            {externals.editTask && <EditTask />}
            {externals.editColumn && <EditColumn />}
            {externals.deleteTask && <DeleteTask />}
        </div>
    </>
  )
}

export default Externals;