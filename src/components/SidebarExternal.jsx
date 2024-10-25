import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';
import SidebarKanban from './SidebarKanban';

function SidebarExternal() {
    const { lightMode, whichMode, selected, select, hide, hidden, boardNames, addNewBoard } = useContext(AppContext);

  return (
    <>
        <div className="sidebar-external">
            <SidebarKanban />
        </div>
    </>
  )
}

export default SidebarExternal