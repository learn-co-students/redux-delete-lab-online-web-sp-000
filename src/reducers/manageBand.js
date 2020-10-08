import uuid from "uuid";

export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  console.log(`In the reducer, action is ${JSON.stringify(action)}`);
  switch (action.type) {
    case "ADD_BAND":
      const newBand = { name: action.name, id: uuid() };
      const newBands = { ...state };
      newBands.bands = state.bands.concat(newBand);
      console.log(`In the reducer, newBand is ${JSON.stringify(newBand)}`);
      console.log(`In the reducer, the state is ${JSON.stringify(newBands)}`);
      return newBands;
    case "DELETE_BAND":
      return {
        bands: state.bands.filter((band) => band.id !== action.id),
      };
    default:
      return state;
  }
}
