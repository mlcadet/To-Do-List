import { legacy_createStore as createStore } from "redux"; // ✅ Fix for Redux 4+
import reducer from "./reducer";

const store = createStore(reducer);

export default store;