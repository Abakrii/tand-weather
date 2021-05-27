
import { useReducer } from 'react';
import './App.css';
import Router from './router';
import {
  DispatchContext,
  StateContext
} from './store/context';
import { useCombineReducers } from './utils/hooks/useCombineReducers';
import reducer from './store/reducer';
import initialState from './store/state';
function App() {
  const [combinedReducers, combinedState] = useCombineReducers({
    state: [reducer, initialState],
  });
  const [state, dispatch] =
    useReducer(combinedReducers, combinedState) || {};
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <Router />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}



export default App;
