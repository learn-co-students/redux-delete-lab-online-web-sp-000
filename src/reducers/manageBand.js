import uuid from 'uuid'
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band ={
        id: uuid(), name: action.band
      }
      console.log("inside add band")
      console.log(band)
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return(
        {items: state.bands.filter(item => item.id !== action.payload)}
      )
    default:
      return state;
  }
};
