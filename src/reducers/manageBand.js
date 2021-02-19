import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, {id: uuid(), name: action.name}] }

      case 'DELETE_BAND':
        const newArray = state.bands.filter( b => b.id !== action.id )
        return { ...state, bands: newArray }

    default:
      return state;
  }
};
