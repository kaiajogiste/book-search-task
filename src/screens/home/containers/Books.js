import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';


import BookCard from '../components/BookCard';

const renderBooksList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let count = "";
  let titles = [];
  let test = [];
  
  if (data.work === undefined) {
    document.getElementById("error").innerHTML = "ERROR";
  } else {
    for (let i = 0; i < data.work.length; i++) {
      titles.push(data.work[i].titleweb);
      count = data.work.length;
      
      /* Get isbn code to show thumbnail */
      
      /* if (data.work[i].titles.isbn.length === undefined) {
         test.push(data.work[i].titles.isbn.$);
       } else {
         test.push(data.work[i].titles.isbn[0].$);
       }
       console.log(test);*/
    }
  }
  
  return (
    <div className="search-books">
      <br/>
      <br/>
      <div className="books-list">
        {titles.map(book => <BookCard book={book} pic={test}/>)}
        {/* {test.map(isb => <img src={`https://images.randomhouse.com/cover/${isb}`} />)}*/}
        <p id="error"></p>
      </div>
    </div>
  );
};


const Books = ({
  data,
  isFetching,
  query,
  error
}) => {
  let jsxStr = '';
  
  if (isFetching) {
    jsxStr = <p className="search-books--loading">Loading...</p>;
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error);
  } else {
    jsxStr = renderBooksList(data, query);
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
    query,
    error
  } = state.books;
  return {
    data,
    isFetching,
    query,
    error
  };
};

export default connect(
  mapStateToProps,
  null
)(Books);