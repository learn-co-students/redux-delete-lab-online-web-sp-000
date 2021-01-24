import uuid from 'uuid'
export default function manageBand(state = {
  bands: []
}, action) {
 
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {name: action.name,
                     id: uuid()}
     
      return { ...state, bands: [...state.bands, newBand] }
    case 'DELETE_BAND':
      console.log(state.bands.filter(band=>(band.id !== action.id)))
      return {bands: state.bands.filter(band=>(band.id !== action.id))}

    default:
      return state;
  }
};
