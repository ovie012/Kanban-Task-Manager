import React, { createContext, useState } from 'react';
import './App.css'

export const AppContext = createContext();

export function AppProvider ({ children }) {
    const [lightMode, setLightMode] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [columnChange, setColumnChange] = useState(false);
    const [boardSettings, setBoardSettings] = useState({
        board : false,
        task : false,
    });
    const [selected, setSelected] = useState(null);
    const [shownExternal, setShownExternal] = useState(false);
    const [externals, setExternals] = useState({
        newBoard : false,
        newTask : false,
        deleteBoard : false,
        editBoard : false,
        editTask : false,
        deleteTask : false,
        editColumn : false,
    });
    const [subtaskSelected, setSubtaskSelected] = useState([]);

    const boardNames = [
      'Platform Launch', 'marketing plans', 'roadmap'
    ];

    const subtasks = [
        'Research competitor pricing and business models',
        'Outline a business model that works for our solution',
        'Talk to potential customers about our proposed solution and ask for fair price expectancy'
    ];

    const eachTask = [
        {
            taskTitle : 'Building UI for onboarding flow',
        },
        {
            taskTitle : 'Create paper prototypes and conduct 10 usability tests with potential customers',
        },
        {
            taskTitle : 'Research pricing points of various competitors and trial different business models',
        },
        {
            taskTitle : 'Building UI for onboarding flow',
        },
        {
            taskTitle : 'Building UI for onboarding flow',
        },
        {
            taskTitle : 'Building UI for onboarding flow',
        },
        {
            taskTitle : 'Building UI for onboarding flow',
        },
        {
            taskTitle : 'Building UI for onboarding flow',
        },
        {
            taskTitle : 'Building UI for onboarding flow',
        },
    ]

    const select = (item) => {
        setSelected(item);
    }

    const hide = () => {
        setHidden(!hidden);
    }

    const whichMode = () => {
        setLightMode(!lightMode);
    };

    const boardSet = () => {
        setBoardSettings({ task : false, board : !boardSettings.board });
    }

    const taskSet = () => {
        setBoardSettings({ task : !boardSettings.task, board : false});
    }

    const hideExternal = () => {
        setShownExternal(false);
        setSubtaskSelected([]);
    }
    
    const addNewTask = () => {
        if (columnChange) {
            setShownExternal(true);
            setExternals({ newTask : true, deleteTask : false, editColumn : false, editTask : false, editBoard : false, deleteBoard : false, newBoard : false })
        } else {
            setShownExternal(false);
            setExternals({ ...externals, newTask : false})
        }
    };

    const editTask = () => {
        setShownExternal(true);
        setExternals({ newTask : false, deleteTask : false, editColumn : false, editTask : true, editBoard : false, deleteBoard : false, newBoard : false });
        setBoardSettings({ task : false, board : false });
    }

    const addNewBoard = () => {
        setShownExternal(true);
        setExternals({ newTask : false, deleteTask : false, editColumn : false, editTask : false, editBoard : false, deleteBoard : false, newBoard : true })
    }

    const editBoard = () => {
        setShownExternal(true);
        setExternals({ newTask : false, deleteTask : false, editColumn : false, editTask : false, editBoard : true, deleteBoard : false, newBoard : false });
        setBoardSettings({ task : false, board : false });
    }

    const deleteBoard = () => {
        setShownExternal(true);
        setExternals({ newTask : false, deleteTask : false, editColumn : false, editTask : false, editBoard : false, deleteBoard : true, newBoard : false });
        setBoardSettings({ task : false, board : false });
    }

    const editColumn = () => {
        setShownExternal(true);
        setExternals({ newTask : false, deleteTask : false, editColumn : true, editTask : false, editBoard : false, deleteBoard : false, newBoard : false });
    }

    const deleteTask = () => {
        setShownExternal(true);
        setExternals({ newTask : false, deleteTask : true, editColumn : false, editTask : false, editBoard : false, deleteBoard : false, newBoard : false });
    };

    const subtaskSelection = (item) => {
        setSubtaskSelected((prevSelectedItem) => {
            if (prevSelectedItem.includes(item)) {
                return prevSelectedItem.filter((i) => i !== item)
            } else {
                return [...prevSelectedItem, item]
            }
        });
    };

    const columnControl = () => {
        setColumnChange(!columnChange);
    }

    return (
        <AppContext.Provider value={{
            whichMode,
            lightMode,
            selected,
            select,
            hide,
            hidden,
            boardNames,
            shownExternal,
            hideExternal,
            addNewBoard,
            addNewTask,
            externals,
            boardSettings,
            boardSet,
            editBoard,
            deleteBoard,
            editTask,
            editColumn,
            taskSet,
            subtaskSelected, 
            subtaskSelection,
            subtasks,
            deleteTask,
            eachTask,
            columnChange,
            columnControl,
        }}
        >
            {children}
        </AppContext.Provider>
    );
};