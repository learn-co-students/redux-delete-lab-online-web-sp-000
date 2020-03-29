import React, { Component } from 'react';

class Band extends Component {

    /* code change */
    handleOnClick = () => {
        this.props.deleteBand(this.props.id)
    }

    render() {
        return(
        <div>
            /* code change */
            <li>{this.props.name}</li>
            <button onClick={this.handleOnClick}>Delete</button>
        </div>
        );
    }
};

export default Band;

/*
Objective:
Set up the new Band component that is in charge of displaying
the information for a single band.
*/

/*
You will also need to add a button that dispatches an action of type 'DELETE_BAND'
and then passes through that band's id as the `action.id`.

This dispatched action should be provided as a prop from BandsContainer.
*/
