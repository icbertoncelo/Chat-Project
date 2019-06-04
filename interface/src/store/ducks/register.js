export const Types = {
  ADD_REQUEST: 'register/ADD_REQUEST',
  ADD_SUCCESS: 'register/ADD_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  registerRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),
  registerSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
};
