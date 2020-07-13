import { taskReducer, taskInitialState, Task } from './reducers/taskReducer';
import { userReducer, userInitialState, User } from './reducers/userReducer';
import { navInitialState, navReducer } from './reducers/toggleNavReducer';

export interface InitialStateType {
  taskState: {
    myTasks: Task[];
  };
  userState: {
    nachname: string;
    email: string;
    title: string;
  };
  navState: {
    show: boolean;
  };
}

export const rootReducer = (
  { taskState, userState, navState }: InitialStateType,
  action: any
) => {
  //middleware
  return {
    taskState: taskReducer(taskState, action),
    userState: userReducer(userState, action),
    navState: navReducer(navState, action),
  };
};

export const rootInitialState = () => {
  return {
    taskState: taskInitialState,
    userState: userInitialState,
    navState: navInitialState,
  };
};
