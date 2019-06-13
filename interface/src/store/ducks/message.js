export const Types = {
  ADD_MESSAGE_REQUEST: 'message/ADD_MESSAGE_REQUEST',
  ADD_MESSAGE_SUCCESS: 'message/ADD_MESSAGE_SUCCESS',
  LOAD_MESSAGE_REQUEST: 'message/LOAD_MESSAGE_REQUEST',
  LOAD_MESSAGE_SUCCESS: 'message/LOAD_MESSAGE_SUCCESS',
  SOCKET_MESSAGE: 'message/SOCKET_MESSAGE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(msg => msg._id !== action.payload.data),
      };
    case Types.LOAD_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_MESSAGE_SUCCESS:
      return { ...state, data: action.payload.data };
    case Types.SOCKET_MESSAGE:
      return { ...state, data: [...state.data, action.payload.message] };
    default:
      return state;
  }
}

export const Creators = {
  addMessage: data => ({
    type: Types.ADD_MESSAGE_REQUEST,
    payload: { data },
  }),
  saveMessage: data => ({
    type: Types.ADD_MESSAGE_SUCCESS,
    payload: { data },
  }),
  loadMessageRequest: () => ({
    type: Types.LOAD_MESSAGE_REQUEST,
  }),
  loadMessageSuccess: data => ({
    type: Types.LOAD_MESSAGE_SUCCESS,
    payload: { data },
  }),
  socketMessage: message => ({
    type: Types.SOCKET_MESSAGE,
    payload: { message },
  }),
};
