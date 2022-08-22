import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { positions, Provider } from "react-alert";

import "./reset.css";

import Home from "./pages/Home";
import Person from "./pages/Person";

import Services from "./core/services";

const AlertTemplate = require("react-alert-template-basic").default;

function App() {
  // false - while loading
  // null - error
  // array - success
  const [userList, setUserList] = useState<any>(false);

  // false - dont show
  // true - show
  const [showList, setShowList] = useState<any>(false);

  useEffect(() => {
    Services.getRandomUsers()
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setUserList(res.data);
          setShowList(true);
        } else setUserList(null);
      })
      .then(() => setShowList(true))
      .catch((error) => {
        console.log(error);
        setUserList(null);
      });
  }, []);

  const handlerBtnReload = () => {
    setShowList(false);

    Services.getRandomUsers()
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setUserList(res.data);
          setShowList(true);
        } else setUserList(null);
      })
      .catch((error) => {
        console.log(error);
        setUserList(null);
      });
  };

  return (
    <>
      <Provider
        template={AlertTemplate}
        timeout={3000}
        position={positions.BOTTOM_CENTER}
      >
        <BrowserRouter basename="/test-people">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  userList={userList}
                  showList={showList}
                  handlerBtnReload={handlerBtnReload}
                />
              }
            />
            <Route path="/person/:id" element={<Person />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
