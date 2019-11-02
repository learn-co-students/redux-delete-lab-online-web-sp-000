import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        bandName: action.name
      }
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      console.log(action)
      return { bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
