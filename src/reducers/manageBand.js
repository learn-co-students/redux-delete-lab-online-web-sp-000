//  hange structure of state so each band is assigned own ID. pass this info through band object including ID & name of band as props to each Band component
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {id: Math.random(), name: action.name}
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)
      return {bands}
    default:
      return state;
  }
};
