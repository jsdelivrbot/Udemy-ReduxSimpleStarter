import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          { book.title }
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

// Whatever is returned will show up as a props inside of BookList
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // Whenever SelectBook is called,
  // the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch)
}

// Produce a Container aka Smart Component that is linked to state.
// Promote BookList from a component to a container - it needs to know
// about this dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
