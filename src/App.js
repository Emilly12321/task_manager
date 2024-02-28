import React from "react";
import "./Backend/app/Routes/index";
import { AppRouter } from "./Backend/app/Routes/index";
import "./Frontend/assets/global.css";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
