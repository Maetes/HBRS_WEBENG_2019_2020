import React, {
  createContext,
  useContext,
  useReducer,
  ReactChild,
  ReducerWithoutAction,
} from 'react';
import { Task } from './reducers/taskReducer';
import { NextComponentType, NextPageContext } from 'next';
import { InitialStateType } from './rootReducer';

// Die Idee der Nutzung des StateContextes zusammen mit dem Use Reducer Hook wurde hier entnommen:
//

interface state {
  reducer: (
    { taskState, userState, navState }: InitialStateType,
    action: any
  ) => { taskState: any; userState: any; navState: any };
  initialState: InitialStateType;
  children: any;
}

export const StateContext = createContext<
  [InitialStateType, React.Dispatch<any>]
>({} as any);

export const StateProvider = ({ reducer, initialState, children }: state) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
