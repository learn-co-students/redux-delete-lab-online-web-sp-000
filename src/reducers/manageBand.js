import uuid from 'uuid';
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band={id: Math.random(), name: action.name }
      return { ...state, bands: [...state.bands, band] }

    // default:
    //   return { ...state, bands: [...state.bands, {id: uuid(), name: action.name}] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band=> band.id !== action.id);
      return {bands};
      default: 
        return state;
      //const filteredBands = state.bands.filter(band => band.id !== action.id)
      //return { bands: [ ...filteredBands ]};
  }
};
