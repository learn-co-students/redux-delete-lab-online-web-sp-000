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

      return { ...state, bands: [...state.bands, band] }
    
    case 'DELETE_BAND':

      let filteredBand = state.bands.filter(function (band) {
        return band.id !== action.id
      })

      return {...state, bands: filteredBand}

    default:
      return state;
  }
};
