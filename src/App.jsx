import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Head from "./components/Head";

// Pages
import Home from "./pages/Home";
import { Sweatshirt } from "./pages/Sweatshirt";

function App() {

  localStorage.setItem('cart', JSON.stringify([]))

  const location = useLocation()

  const [headerColor, setHeaderColour] = useState(true)

  useEffect(() => {

    if (location.pathname != '/') {
       setHeaderColour(false)
    }

    if (location.pathname == '/') {
      setHeaderColour(true)
   }

  }, [location])

  return (
    <>
      <Head hCState={headerColor} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Sweatshirt" element={<Sweatshirt />}></Route>
      </Routes>
    </>
  );
}

export default App;
