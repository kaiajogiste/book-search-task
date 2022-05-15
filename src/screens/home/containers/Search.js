import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../actions';

const Search = ({
  getBooks,
}) => {
  
  const onInputChange = e => {
    (getBooks(e.target.value));
  };
  
  return (
    
    <div className="search-books">
        <input className="input" type="text" onChange={onInputChange} placeholder="Search for book"/>
    </div>
    
  );
  
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBooks
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);