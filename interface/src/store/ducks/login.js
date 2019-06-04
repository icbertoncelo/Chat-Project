export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  OUT_REQUEST: 'login/OUT_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  signedIn: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        signedIn: true,
      };
    case Types.OUT_REQUEST:
      return { ...state, signedIn: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),
  loginSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  logOutRequest: () => ({
    type: Types.OUT_REQUEST,
  }),
};
