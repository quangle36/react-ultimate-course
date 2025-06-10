export const initialState = {
  type: 'bar',
  options: {
    label: 'Default Chart'
  }
}

export const chartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_TYPE_CHART': {
      return {
        ...state,
        type: action.payload
      }
    }
    default:
      return state
  }
}