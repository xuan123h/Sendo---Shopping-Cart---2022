import rootReducers from "./reducer";

// const { createStore } = require("redux");

import { createStore } from "redux";

const store = createStore(rootReducers);

export default store;
