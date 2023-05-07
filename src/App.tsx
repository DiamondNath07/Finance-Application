import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { IUser } from "./components/interface";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("lendsqrUser");
    if (storedUser) {
      const parsedItem = JSON.parse(storedUser) as IUser;
      setUser(parsedItem);
    }
  }, [user]);

  return (
    <>
      <RouterProvider router={routes(user)} />
    </>
  );
}

export default App;
