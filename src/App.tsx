import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { renderRoutes } from "./routes";
import routes from "./routes";
// good
function App() {
  return (
    <Fragment>
      <PersistGate persistor={persistor}>
        {renderRoutes(routes)}
        <ToastContainer />
      </PersistGate>
    </Fragment>
  );
}

export default App;
