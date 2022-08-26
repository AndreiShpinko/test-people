import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { positions, Provider } from "react-alert";

import "./reset.css";

import Home from "./pages/Home/Home";
import Person from "./pages/Person/Person";

const AlertTemplate = require("react-alert-template-basic").default;

function App() {
  return (
    <>
      <Provider
        template={AlertTemplate}
        timeout={3000}
        position={positions.BOTTOM_CENTER}
      >
        <BrowserRouter basename="/test-people">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/person/:id" element={<Person />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
