export const initialState = {
  type: 'bar',
  isLoading: false,
  options: {
    label: 'Default Chart'
  }
}

export const chartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'UPDATE_TYPE_CHART': {
      return {
        ...state,
        type: action.payload
      }
    }
    case 'UPDATE_LABEL_CHART': {
      return {
        ...state,
        options: {
          ...state.options,
          label: action.payload
        }
      }
    }
    default:
      return state
  }
}