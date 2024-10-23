import React, { createContext, useState } from 'react';
import './App.css'

export const AppContext = createContext();

export function AppProvider ({ children }) {
    const [lightMode, setLightMode] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [boardSettings, setBoardSettings] = useState({
        board : false,
        task : false,
    })
    const [selected, setSelected] = useState(null);
    const [shownExternal, setShownExternal] = useState(false);
    const [externals, setExternals] = useState({
        newBoard : false,
        newTask : false,
        deleteBoard : false,
        editBoard : false,
    })

    const boardNames = [
      'Platform Launch', 'marketing plans', 'roadmap'
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

    const hideExternal = () => {
        setShownExternal(false);
    }

    const addNewBoard = () => {
        setShownExternal(true);
        setExternals({ newTask : false, editBoard : false, deleteBoard : false, newBoard : true })
    }

    const addNewTask = () => {
        setShownExternal(true);
        setExternals({ newTask : true, editBoard : false, deleteBoard : false, newBoard : false })
    }

    const editBoard = () => {
        setShownExternal(true);
        setExternals({ newTask : false, editBoard : true, deleteBoard : false, newBoard : false });
        setBoardSettings({ task : false, board : false });
    }

    const deleteBoard = () => {
        setShownExternal(true);
        setExternals({ newTask : false, editBoard : false, deleteBoard : true, newBoard : false });
        setBoardSettings({ task : false, board : false });
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
        }}
        >
            {children}
        </AppContext.Provider>
    );
};