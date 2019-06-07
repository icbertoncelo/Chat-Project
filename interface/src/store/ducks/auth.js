export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGOUT: 'auth/LOGOUT',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  signedIn: !!localStorage.getItem('@Chat:token'),
  token: localStorage.getItem('@Chat:token') || null,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        signedIn: true,
        token: action.payload.data.token,
      };
    case Types.LOGOUT:
      return {
        ...state,
        loading: false,
        signedIn: false,
        token: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.LOGIN_REQUEST,
    payload: { data },
  }),
  loginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data },
  }),
  logOut: () => ({
    type: Types.LOGOUT,
  }),
};
