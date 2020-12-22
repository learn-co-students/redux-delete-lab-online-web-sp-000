import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands, {id: uuid(), name: action.name}] };
    case 'DELETE_BAND':
      return { bands: state.bands.filter(b => {return b.id != action.id})};
    default:
      return state;
  }
};
