import React, { Component, PropTypes } from 'react';
import './Suggestion.css';

export default class Suggestion extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    onCloseAction: PropTypes.func,
    suggestionData: PropTypes.object,
    suggestionId: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.suggestionClose = this.suggestionClose.bind(this);
  }

  suggestionValue() {
    const data = this.props.suggestionData;
    const id = this.props.suggestionId;
    return data[id];
  }

  suggestionClose() {
    this.props.dispatch(this.props.onCloseAction());
  }

  render() {
    return (
      <div className='suggestion'>
        <div className='modal is-active'>
          <div className='modal-background'></div>
          <div className='modal-card'>
            <p className='modal-card-body'>{this.suggestionValue()}</p>
          </div>
          <button
            className='modal-close'
            onClick={this.suggestionClose}
          >
          </button>
        </div>
      </div>
    );
  }
}
