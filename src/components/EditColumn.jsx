import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function EditColumn() {
    const { hideExternal, editTask, deleteTask, subtasks, subtaskSelected, subtaskSelection, selected, select, taskSet, boardSettings } = useContext(AppContext);


  return (
    <>
        <div className="edit-column">
            <div className="edit-column-wrapper">
                <img onClick={hideExternal} className='cancel' src="/icon-cross.svg" alt="cancel" />
                <section className="edit-column-header">
                    <h2>Research pricing points of various competitors and trial different business models</h2>
                    <img onClick={() => {taskSet();}} src="/icon-vertical-ellipsis.svg" alt="click for more" />
                </section>
                {boardSettings.task && 
                    <section className="task-settings">
                        <h5 onClick={editTask}>edit task</h5>
                        <h6 onClick={deleteTask}>delete task</h6>
                    </section>
                }
                <p>We know what we're planning to build for version one. 
                    Now we need to finalise the first pricing model we'll use. 
                    Keep iterating the subtasks until we have a coherent proposition.
                </p>
                <form>
                    <label>Subtasks ({subtaskSelected.length} of {subtasks.length})</label>
                    {subtasks.map((item, index) => (
                        <section key={index} className={subtaskSelected.includes(item) ? 'subtask-selected' : ''}>
                            <input onClick={() => {subtaskSelection(item)}} type="checkbox"  name="type" id="column" />
                            <h3>{item}</h3>
                        </section>
                    ))}
                </form>
                <form action="POST">
                    <label>Current Status</label>
                    <select name="type" id="column">
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </form>
            </div>
        </div>
    </>
  )
}

export default EditColumn;