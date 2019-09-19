import React, { Component } from 'react';
import { connect } from 'react-redux'

class BandInput extends Component {

constructor() {
    super();
      this.state = {
      bandName: ''
      
    };
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: ''
     
    });
  }

    handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
      
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label> Add Band </label>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};



const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name }),
  delete: id => dispatch({ type: "DELETE_BAND", id })
})



export default connect(mapStateToProps, mapDispatchToProps)(BandInput)
