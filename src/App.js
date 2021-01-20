import "./App.css";
import Bmi from "./components/Bmi";
import Logs from "./components/Logs";
import { getData, storeData } from "./middleware/localstorage";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // Initialize data from local storage
  const allLogs = () => getData("data") || [];
  const [logs, setLogs] = useState(allLogs);

  useEffect(() => {
    storeData("data", logs);
  }, [logs]);

  // Delete a log
  const onDelete = (id) => {
    let newLogs = logs.filter((item) => {
      return item.id !== id;
    });
    setLogs(newLogs);
  };

  // Adding a new log
  const onSubmit = (log) => {
    log.id = uuidv4();
    let newLogs = [log, ...logs];
    if (newLogs.length > 10) {
      newLogs = newLogs.slice(0, newLogs.length - 1);
    }
    setLogs(newLogs);
  };

  /*------------------------------------------------------------------------*/

  const getInitialMode = () => {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    if (isReturningUser) {
      return savedMode;
    } else {
      return false;
    }
  };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const setDark = (boolean) => {
    setDarkMode(boolean);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="full-height">
        <div className="container">
          <div className="row">
            <div className="content col-12 p-0">
              <Bmi submit={onSubmit} darkMode={darkMode} setDark={setDark} />
            </div>
            <div className="container-fluid p-0 pb-3">
              {logs.map((log) => (
                <Logs
                  key={log.id}
                  id={log.id}
                  weight={log.weight}
                  height={log.height}
                  date={log.date}
                  bmi={log.bmi}
                  phrase={log.phrase}
                  deleteCard={onDelete}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
