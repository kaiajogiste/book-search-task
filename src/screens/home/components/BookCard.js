import React from 'react';

const BookCard = ({
  book,
  pic
}) => {
  book = book.split(':');
  console.log(book);
  console.log(pic);
  return (
    <div className="entire-row">
      <br/>
      <a href={`https://www.amazon.com/s?k=${book}`} target="_blank" rel="noopener noreferrer">
        {/*TODO show cover images, almost works, needs little fix*/}
        <div className="cover-photo">
          <img className="book-cover" src={`https://images.randomhouse.com/cover/${pic}`}/>
        </div>
        <div className="rows">
          <div className="ns">
            <h className="book-title">{book[0]}</h>
          </div>
          <div className="ns"><p className="book-subtitle">{book[1]}</p></div>
          {/*<div className="ns"> <p className="book-title" >{book[book.length-1]}</p></div>*/}
        </div>
      </a>
      <br/>
    </div>
  );
};

export default BookCard;