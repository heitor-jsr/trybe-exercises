import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions"

const initialState = { 
  isLoading: false,
  character: '',
}

function characterReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default: 
      return state
  }
}

export default characterReducer;