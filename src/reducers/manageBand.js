import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let id = uuid()
      const band = {
        id: id,
        name: action.name
      }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      // return { ...state, bands: state.bands.filter(band => band.id !== action.bandId)}
      const bands = state.bands.filter(band => band.id !== action.bandId)

      return { bands }

    default:
      return state;
  }
};
