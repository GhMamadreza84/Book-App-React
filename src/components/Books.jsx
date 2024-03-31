import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";
const Books = () => {
  const [liked, setLiked] = useState([]);
  const handleLikeList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter;
      (i) => i.id !== book.id;
      setLiked(newLikedList);
    }
  };
  return (
    <>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikeList={handleLikeList} />
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Books;
