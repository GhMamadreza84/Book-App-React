import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

import styles from "./Books.module.css";
const Books = () => {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
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
      <SearchBox />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikeList={handleLikeList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
