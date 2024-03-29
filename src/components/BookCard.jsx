import { AiFillHeart } from "react-icons/ai";
const BookCard = ({ data: { title, author, pages, image, language } }) => {
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
        <AiFillHeart />
      </button>
    </div>
  );
};

export default BookCard;
