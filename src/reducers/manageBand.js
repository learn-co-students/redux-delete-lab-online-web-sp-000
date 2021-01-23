import uuid from 'uuid'
export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
      let newBand = {name: action.name,
                     id: uuid()}
     
      return { ...state, bands: [...state.bands, newBand] }
    case 'DELETE_BAND':
      return state.bands.filter(band=>(band.id !== action.id))

    default:
      return state;
  }
};
