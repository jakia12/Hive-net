import "./App.css";
import "./index.css";
import { router } from "./routes/router";

import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
