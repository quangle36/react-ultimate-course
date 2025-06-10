export const initialState = {
  user: null,
  access_token: null,
  refresh_token: null
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return state
  }
}