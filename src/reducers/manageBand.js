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
      console.log('in DELETE_BAND, state', state)
      console.log('in DELETE_BAND, action', action)


      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
