import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {         // svaki TODO kad je incijalno kreiran dobije ID
        id: uuid(),
        name: action.name
      }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':

      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };
       // id check sa action data id

    default:
      return state;
  }
};
