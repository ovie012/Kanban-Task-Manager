import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';
import AddNewColumn from './AddNewColumn';
import SingleColumn from './SingleColumn';
import EmptyAddNewSingle from './EmptyAddNewSingle';

function Column() {
  const { columnChange } = useContext(AppContext);

  return (
    <>
        <div className="column added">
          {columnChange ? (
            <>
              {/* <SingleColumn /> */}
              <EmptyAddNewSingle />
            </>
          ) : (
            <>
              <AddNewColumn />
            </>
          )}
        </div>
    </>
  )
}

export default Column;