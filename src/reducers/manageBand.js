export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };

    default:
      return state;
  }
};
