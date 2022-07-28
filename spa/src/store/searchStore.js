import { makeAutoObservable } from "mobx";

export default class SearchStore {
  constructor() {
    this._searchValue = "";

    makeAutoObservable(this);
  }
  setSearchValue(searchValue) {
    this._searchValue = searchValue;
  }

  get searchValue() {
    return this._searchValue;
  }
}
