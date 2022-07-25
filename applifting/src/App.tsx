import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import GlobalStyle from "./GlobalStyles";
import { AppRouter } from "./routing/AppRouter";
import store from "./store/Store";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
