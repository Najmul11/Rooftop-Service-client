import {RouterProvider} from "react-router-dom"
import React, { createContext, useState } from 'react';
import { router } from "./Router/Routes";

export const DarkContext=createContext()


function App() {
  const [darkMode, setDarkMode]=useState(false)
  const darkmode={darkMode, setDarkMode}
  return (
      <DarkContext.Provider value={darkmode}>
        <div className={darkMode ? 'dark' :""}>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </DarkContext.Provider>
  );
}

export default App;
