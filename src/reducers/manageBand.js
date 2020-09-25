import uuid from 'uuid';



export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
//  console.log("add", action)
      return { ...state, bands: [...state.bands, { id: uuid(), name: action.name}] }
    case "DELETE_BAND":
      // console.log(this.action)
      return {...state, bands: state.bands.filter(b => b.id !== action.id)}

    default:
      return state; /// grab all bands they are not spesific band 
  }
};
