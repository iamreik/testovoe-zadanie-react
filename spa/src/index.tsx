import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import PageStore from "./store/pageStore";
import PageContext from "./context/pageContext";
import SearchStore from "./store/searchStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
function Main() {
  return (
    <PageContext.Provider
      value={{
        pages: new PageStore(),
        search: new SearchStore(),
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PageContext.Provider>
  );
}

root.render(<Main />);
