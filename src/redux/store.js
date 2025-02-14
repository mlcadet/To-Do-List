import { legacy_createStore as createStore } from "redux"; // ✅ Fix for Redux 4+
import reducer from "./reducer"; // ✅ Ensure reducer is correctly imported

// Create Redux store
const store = createStore(reducer);

export default store;