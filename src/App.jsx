import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1 className="mb-5 text-blue-500">Hello, World!</h1>;
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
