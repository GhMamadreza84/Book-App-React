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
      <button>like</button>
    </div>
  );
};

export default BookCard;
