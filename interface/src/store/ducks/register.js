export const Types = {
  REGISTER_REQUEST: 'register/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'register/REGISTER_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case Types.REGISTER_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  registerRequest: data => ({
    type: Types.REGISTER_REQUEST,
    payload: { data },
  }),
  registerSuccess: data => ({
    type: Types.REGISTER_SUCCESS,
    payload: { data },
  }),
};
