import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);


    // State is a plain js object that is used to record and react to user events. Each class based component has its state object. each change provokes a rerender and of its children. needs to be initialized.
    this.state = { term: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // Controlled component. Value is defined by state.
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
