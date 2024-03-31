import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";
const Books = () => {
  const [like, setLike] = useState([]);
  const handleLikeList = (books, status) => {};
  return (
    <>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikeList={handleLikeList}/>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Books;
