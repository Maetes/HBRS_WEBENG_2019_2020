export interface Task {
  name: string;
  beschreibung: string;
  code: string;
  click: string;
}

export interface stateType {
  myTasks: Task[];
}

export const taskReducer = (state: stateType, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'INSERT_TASKLIST':
      return {
        ...state,
        myTasks: payload,
      };
    case 'ADD_TASK':
      return {
        ...state,
        myTasks: [...state.myTasks, payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        myTasks: [...state.myTasks.splice(0, payload)],
      };
    // case 'UPDATE_TASK':
    //   return update(state, {
    //     tasks: {
    //       [payload.id]: { [payload.name]: { $set: payload.value } },
    //     },
    //   });
    case 'REMOVE_ALL': {
      return {
        ...payload,
      };
    }
    default:
      return state;
  }
};

export const taskInitialState = { myTasks: [] };
