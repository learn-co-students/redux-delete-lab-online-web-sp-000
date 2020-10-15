import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: uuid(),
        name: action.name
      }
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      let filtered = state.bands.filter(band => band.id !== action.id)
      return { bands: filtered }
    default:
      return state;
  }
};
