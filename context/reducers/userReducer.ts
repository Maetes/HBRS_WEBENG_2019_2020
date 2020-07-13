export interface User {
  nachname: string;
  email: string;
  title: string;
}

export interface UserStateType {
  currentUser: User;
}

export const userReducer = (state: User, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        ...payload,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        nachname: '',
        email: '',
        title: '',
      };
    case 'UPDATE_USER':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const userInitialState = {
  email: '',
  nachname: '',
  title: '',
};
