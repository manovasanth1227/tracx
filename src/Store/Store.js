import React from "react";

const initialState = {
  user: {},
  banks: [],
  transactions: [],
};
export default React.createContext(initialState);
