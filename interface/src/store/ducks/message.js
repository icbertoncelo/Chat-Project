export const Types = {
  ADD_MESSAGE_REQUEST: 'message/ADD_MESSAGE_REQUEST',
  // ADD_MESSAGE_SUCCESS: 'message/ADD_MESSAGE_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_MESSAGE_REQUEST:
      return { ...state, data: [...state.data, action.payload.data] };
    // case Types.ADD_MESSAGE_SUCCESS:
    //   return { ...state, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}

export const Creators = {
  addMessage: data => ({
    type: Types.ADD_MESSAGE_REQUEST,
    payload: { data },
  }),
  // saveMessage: data => ({
  //   type: Types.ADD_MESSAGE_SUCCESS,
  //   payload: { data },
  // }),
};
