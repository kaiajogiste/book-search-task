import { useState, useEffect } from 'react';
import './book.css'

const Book = ({ match: { params } }) => {

  const [setBookInfo] = useState({});
  const [setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true)
    fetch(`https://reststop.randomhouse.com/resources/works?search=${params.ID}`)
    .then(response => {
      setBookInfo(response.data);
    })
    .catch(() => {
      setBookInfo({});
    })
    .finally(() => {
      setIsFetching(false)
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [params.ID]);
}
export default Book;