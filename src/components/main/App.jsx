import React from "react";
import { Provider } from "react-redux";
import store from "../../services/storeService";

import PlaygroundContainer from "../../containers/PlaygroundContainer";
import ToolBar from "./ToolBar";

const App = () => (
  <Provider store={store}>
    <ToolBar></ToolBar>
    <PlaygroundContainer></PlaygroundContainer>
  </Provider>
);

export default App;
