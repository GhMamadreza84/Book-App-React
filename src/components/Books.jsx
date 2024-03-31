import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";

import styles from "./Books.module.css";
const Books = () => {
  const [liked, setLiked] = useState([]);
  const handleLikeList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikeList={handleLikeList} />
        ))}
      </div>
      {!!liked.length && (
        <div>
          {liked.map((book) => (
            <SideCard key={book.id} data={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default Books;
