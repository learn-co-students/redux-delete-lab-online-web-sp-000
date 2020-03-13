export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random()*10000000000000000,
        name: action.payload.name
      }

      return { bands: state.bands.concat(band) };
      //return { ...state, bands: [...state.bands, action.payload.bandName] }

      case 'DELETE_BAND':
        return {
          bands: state.bands.filter(function (band) {
            return band.id !== action.id;
          })
        }

    default:
      return state;
  }
};
