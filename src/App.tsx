import "bulma/css/bulma.min.css";
import { useRouter } from "hooks/useRouter";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "router";
import "./styles/app.scss";
import "animate.css";

function App() {
  const element = useRoutes(routes);
  const [isLoaded, setIsLoaded] = useState(false);
  useRouter();

  return <div className="App">{element}</div>;
}

export default App;
