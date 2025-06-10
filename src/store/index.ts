import { combineReducers, createStore } from "redux";
import { userReducer } from "../redux/user.reducer";
import { chartReducer } from "../redux/chart.reducer";

const rootReducers = combineReducers({
  user: userReducer,
  chart: chartReducer
});

export const store = createStore(rootReducers);

/*
store = {
  user: {
    user: null,
    access_token: null,
    refresh_token: null
  },
  chart: {
    type: 'bar',
    options: {
      label: 'Default Chart'
    }
  }
}
*/