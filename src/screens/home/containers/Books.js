import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';


import BookCard from '../components/BookCard';

const renderBooksList = (data) => {
  if (isEmpty(data)) {
    return null;
  }
  let titles = [];
  let test = [];
  let error = "";
  
  if (data.work === undefined) {
    console.log("NOT FOUND");
    error = "Sorry, we could not find a book with that name.";
  } else {
    for (let i = 0; i < data.work.length; i++) {
      titles.push(data.work[i].titleSubtitleAuth);
      
      /* Get isbn code to show thumbnail */
      
      if (data.work[i].titles.isbn.length === undefined) {
        test.push(data.work[i].titles.isbn.$);
      } else {
        test.push(data.work[i].titles.isbn[0].$);
      }
      console.log(test);
    }
  }
  
  return (
    <div className="search-books">
      <br/>
      <br/>
      <div className="books-list">
        {titles.map(book => <BookCard book={book} pic={test[titles.indexOf(book)]}/>)}
        {/* {test.map(isb => <img src={`https://images.randomhouse.com/cover/${isb}`} />)}*/}
        
        <p className="error">{error}</p>
      
      </div>
    </div>
  );
};


const Books = ({
  data,
  isFetching,
  error
}) => {
  let jsxStr = '';
  
  if (isFetching) {
    jsxStr = <p className="search-books--loading">Loading...</p>;
  } else if (!isEmpty(error)) {
    jsxStr = "";
  } else {
    jsxStr = renderBooksList(data);
  }
  return (
    <div className="books">
      {jsxStr}
    </div>
  );
};

const mapStateToProps = (state) => {
  let {
    data,
    isFetching,
    error
  } = state.books;
  return {
    data,
    isFetching,
    error
  };
};

export default connect(
  mapStateToProps,
  null
)(Books);