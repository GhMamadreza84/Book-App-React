import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
const BookCard = ({ data: { title, author, pages, image, language } }) => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} Pages</span>
        </div>
      </div>
      <button>
        <AiFillHeart color="red" fontSize="1.8rem" />
      </button>
    </div>
  );
};

export default BookCard;
