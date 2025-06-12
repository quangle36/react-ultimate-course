export const showLoading = () => {
  return {
    type: 'SHOW_LOADING',
  }
}

export const updateTypeChart = (typeChart: string) => {
  return {
    type: 'UPDATE_TYPE_CHART',
    payload: typeChart
  }
}

export const updateLabelChart = (label: string) => {
  return {
    type: 'UPDATE_LABEL_CHART',
    payload: label
  }
}