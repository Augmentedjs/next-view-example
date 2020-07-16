/* fonts */
import "typeface-roboto";
import "typeface-libre-franklin";
import "material-icons";

import "presentation-css";
import "./styles/main.scss";

import { ErrorHandler } from "presentation-exceptions";
import initializeApp from "./setup/initializeApp.js";

const DeusEx = async () => {
  try {
    return await initializeApp();
  } catch(e) {
    ErrorHandler(e);
  }
};

// invoke the app
if (AUTO_INVOKE) {
  DeusEx();
}
