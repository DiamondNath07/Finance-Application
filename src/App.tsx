import React, { useEffect, useRef, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { IUser } from "./components/interface";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  const didMountRef = useRef(false);

useEffect(() => {
  const storedUser = localStorage.getItem("lendsqrUser");
  if (storedUser && !didMountRef.current) {
    const parsedItem = JSON.parse(storedUser) as IUser;
    setUser(parsedItem);
    didMountRef.current = true;
  }
}, [user, setUser]);

  return (
    <>
      <RouterProvider router={routes(user)} />
    </>
  );
}

export default App;
