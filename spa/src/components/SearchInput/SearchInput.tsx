import React, { useContext } from "react";
import "./searchinput.scss";
import PageContext from "../../context/pageContext";
import { observer } from "mobx-react-lite";

const SearchInput = observer(() => {
  const { search } = useContext(PageContext);
  return (
    <header className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск"
        onChange={(e) => search.setSearchValue(e.target.value)}
      />
    </header>
  );
});

export default SearchInput;
