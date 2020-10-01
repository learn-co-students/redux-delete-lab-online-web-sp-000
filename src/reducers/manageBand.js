import uuid from 'uuid'

export default function manageBand(state = {

  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const id = uuid()
      const name = action.name
      return { ...state, bands: [...state.bands, {id, name}] }


    case 'DELETE_BAND':
      console.log("DELETEY")
      return {bands: state.bands.filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
