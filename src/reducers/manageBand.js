import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log('added band')
    const band = {
      id: uuid(),
      bandName: action.bandName
    }
    return { bands: state.bands.concat(band) };

    case 'DELETE_BAND':
    console.log('delete band', 'state', state, 'action', action)
    let idx = state.bands.findIndex(band => band.id  === action.id)
    return {bands: [...state.bands.slice(0, idx), ...state.bands.slice(idx + 1)]};
    //return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
    return state;
  }
};
