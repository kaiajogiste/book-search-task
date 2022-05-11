import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './book.css'

const Book = ({ match: { params } }) => {

  const [bookInfo, setBookInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true)
    axios.get(`https://reststop.randomhouse.com/resources/works?lastName=${params.ID}`)
    .then(response => {
      setBookInfo(response.data);
    })
    .catch(() => {
      setBookInfo({});
    })
    .finally(() => {
      setIsFetching(false)
    })

  }, [params.ID]);

  let jsxStr = ''
  if (isFetching) {
    jsxStr = (
      <p>Loading...</p>
    )
  }
}
export default Book;