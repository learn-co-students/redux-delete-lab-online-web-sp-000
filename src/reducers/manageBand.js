export default function manageBand(state = {bands: []}, action) {
    switch (action.type) {

    case 'ADD_BAND':
        // return { ...state, bands: [...state.bands, action.name] }

        /* code change */
        const band = { id: Math.random(), name: action.name }
        return { ...state, bands: [...state.bands, band] }

    /* code change */
    case 'DELETE_BAND':
        const bands = state.bands.filter(band => band.id !== action.id)
        return { bands }

    default:
        return state;
    }
};

/*
In the manageBand reducer, change the structure of the state
such that each band is assigned its own ID.

You will also need to pass this info through to the band object
as the props to each rendered Band component.

This should include the id and name of the band.

You will have to alter the reducer such that it creates a new list of bands
that does not include the one whose delete button was pressed.
*/
