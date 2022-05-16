import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../actions';
import {debounce} from "lodash";

const Search = ({
  getBooks,
  query
}) => {
  
  const debouncedGetBooks = debounce(query => {
    getBooks(query);
  }, 700);
  
  const onInputChange = e => {
    debouncedGetBooks(e.target.value);
  };
  
  return (
    
    <div className="search-books">
        <input className="input" type="text" onChange={onInputChange} placeholder="Type to search"/>
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