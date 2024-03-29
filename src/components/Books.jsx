import { books } from "../constants/mockData";
import BookCard from "./BookCard";
const Books = () => {
  console.log(books);
  return (
    <>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} />
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Books;
