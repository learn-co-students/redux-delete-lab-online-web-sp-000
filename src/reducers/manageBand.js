import uuid from 'uuid';

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

    default:
      return state;
  }
};
