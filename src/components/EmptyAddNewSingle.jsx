import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function EmptyAddNewSingle() {
    const { editBoard, hidden } = useContext(AppContext);

  return (
    <>
        <div className={`empty-add-new-single ${!hidden ? 'side-bar-open' : ''}`}>
            <section className="column-title">
                <span></span>
            </section>
            <section className="column-list">
                <p onClick={() => { editBoard(); }} >+ new column</p>
            </section>
        </div>
    </>
  )
}

export default EmptyAddNewSingle;