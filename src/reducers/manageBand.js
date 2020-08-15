import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      let bands = state.bands.filter(band => band.id !== action.id)
      return {bands: bands}

    default:
      return state;
  }
};
