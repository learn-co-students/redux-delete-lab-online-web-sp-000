import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, { name: action.name, id: uuid() }] }

    case 'DELETE_BAND':
      const idx = state.bands.findIndex(band => band.id === action.id);
      return {...state, bands: [...state.bands.slice(0, idx), ...state.bands.slice(idx + 1)] }

    default:
      return state;
  }
};
