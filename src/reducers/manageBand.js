import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newBand = {
        id: uuid(),
        name: action.name
      }
      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      let remainingBands = state.bands.filter(band => band.id !== action.id)
      return {bands: remainingBands}

    default:
      return state;
  }
};
