export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      if (action.name === "") return;
      const band = {
        id: Math.random() * 1000000000000000000,
        name: action.name
      };
      return { ...state, bands: [...state.bands, band] };

    default:
      return state;
  }
}
