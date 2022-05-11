import React from 'react';

const BookCard = ({
  book,
  pic
}) => {
  console.log(book);
  console.log(pic);
  return (
    <div className="book">
      <a href={`https://www.amazon.com/s?k=${book}`} target="_blank" rel="noopener noreferrer">
        <div>
          
          {/*TODO show cover images, almost works, needs little fix*/}
          {/* {pic.map(isb =>  <img width="10%" height="20%" variant="top" src={`https://images.randomhouse.com/cover/${isb}`} />)}*/}
        
            <h className="book-title" >{book}</h>
          <hr size="8" width="95%" color="black"/>
        </div>
      </a>
    </div>
  );
};

export default BookCard;