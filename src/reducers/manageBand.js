import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      // return { ...state, bands: [...state.bands, action.name] }
      const band = {
        id: uuid(),
        name: action.name
      }


      // return { todos: state.todos.concat(action.payload.text) };
      return { bands: state.bands.concat(band) };

      case 'DELETE_BAND':
 
        // return {todos: state.todos.filter(todo => todo !== action.payload)}
        return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
