import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  console.log("Store: ", state.bands)
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        id: uuid(),
        name: action.name
      }
      console.log("added band: ", newBand)
      return { bands: state.bands.concat(newBand) };

      case 'DELETE_BAND':
      console.log("Delete band: ", action.id)
      const newState={bands: state.bands.filter(band => band.id !== action.id)}
      console.log("New State:", newState)
      return newState
    
      default:
      return state;
  }
};
