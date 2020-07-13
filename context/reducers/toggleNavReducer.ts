export interface Nav {
  show: boolean;
}

export interface NavStateType {
  currentShow: Nav;
}

export const navReducer = (state: Nav, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE':
      console.log(payload);
      return {
        ...state,
        show: payload,
      };
    default:
      return state;
  }
};

export const navInitialState = {
  show: false,
};
