import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function SingleColumn() {
    const { eachTask, hidden } = useContext(AppContext);

  return (
    <>
        <div className={`single-column ${!hidden ? 'side-bar-open' : ''}`}>
            <section className="column-title">
                <span></span>
                <p>todo ({eachTask.length})</p>
            </section>
            <section className="column-list">
                {eachTask.map((item, index) => (
                    <div key={index} className="each-task">
                        <h3>{item.taskTitle}</h3>
                        <p>0 of 3 subtasks</p>
                    </div>
                ))}
            </section>
        </div>
    </>
  )
}

export default SingleColumn;