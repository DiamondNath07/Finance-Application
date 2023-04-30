import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  const user = localStorage.getItem(JSON.parse("lendsqrUser"));
  return (
    <>
      <RouterProvider router={routes(user)} />
    </>
  );
}

export default App;
