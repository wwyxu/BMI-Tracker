import "./App.css";
import Bmi from "./components/Bmi";
import Logs from "./components/Logs";
import { getData, storeData } from "./helpers/localstorage";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const logs = () => getData("data");
  const [state, setState] = useState(logs);

  // Initialize data from local storage
  useEffect(() => {
    storeData("data", state);
  }, [state]);

  // Delete a log
  const onDelete = (id) => {
    let newState = state.filter((item) => {
      return item.id !== id;
    });
    setState(newState);
  };

  // Adding a new log
  const onSubmit = (item) => {
    item.id = uuidv4();
    let newState = [item, ...state];
    if (newState.length > 10) {
      newState = newState.slice(0, newState.length - 1);
    }
    setState(newState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="content col-12 p-0">
          <Bmi submit={onSubmit} />
        </div>
        <div className="container-fluid p-0">
          {state.map((log) => (
            <Logs
              key={log.id}
              id={log.id}
              weight={log.weight}
              height={log.height}
              date={log.date}
              bmi={log.bmi}
              phrase={log.phrase}
              deleteCard={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
