import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function EditTask() {
    const { hideExternal } = useContext(AppContext);

  return (
    <>
        <div className="edit-task">
            <img onClick={hideExternal} className='cancel' src="/icon-cross.svg" alt="cancel" />
            <h3>edit task</h3>
            <form action="POST">
                <label>title</label>
                <input type="text" placeholder='e.g. Take coffee break' />
            </form>
            <form action="POST">
                <label>description</label>
                <textarea className='description' type="text" placeholder='e.g.It’s always good to take a break. This 15 minute break will recharge the batteries a little.' />
            </form>
            <form action="POST">
                <label>subtasks</label>
                <div>
                    <input type="text" placeholder='e.g. Make coffee' />
                    <img src="/icon-cross.svg" alt="cancel" />
                </div>
                <div>
                    <input type="text" placeholder='e.g. Drink coffee and smile' />
                    <img src="/icon-cross.svg" alt="cancel" />
                </div>
            </form>
            <button>+ add new subtask</button>
            <form action="POST">
                <label>status</label>
                <select name="type" id="column">
                    <option value="Todo">Todo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </form>
            <button>Save changes</button>
        </div>
    </>
  )
}

export default EditTask;