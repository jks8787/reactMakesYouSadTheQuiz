import React, { Component, PropTypes } from 'react';

export default class Question extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    onClickYes: PropTypes.func,
    onClickNo: PropTypes.func,
    question: PropTypes.object,
    showSuggestion: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.onClickYes = this.onClickYes.bind(this)
    this.onClickNo = this.onClickNo.bind(this)
  }

  onClickYes() {
    this.props.dispatch(this.props.onClickYes());
    const suggestionId = this.props.question.steps.yes.suggestionId;
    if (suggestionId !== null ) {
      this.props.dispatch(this.props.showSuggestion(suggestionId));
    }
  }

  onClickNo() {
    this.props.dispatch(this.props.onClickNo());
    const suggestionId = this.props.question.steps.no.suggestionId;
    if (suggestionId !== null ) {
      this.props.dispatch(this.props.showSuggestion(suggestionId));
    }
  }

  renderActions() {
    if (this.props.question.steps.yes.nextQuestionId) {
      return (
        <div>
          <button className="button is-medium is-outlined" onClick={this.onClickNo}>
            No &#10007;
          </button>
          &nbsp;
          &nbsp;
          <button className="button is-medium is-outlined" onClick={this.onClickYes}>
            Yes &#10003;
          </button>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className='question'>
        <h3 className="title is-4">{this.props.question.value}</h3>
        {this.renderActions()}
      </div>
    );
  }
}
