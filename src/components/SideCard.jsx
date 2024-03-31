import styles from "./SideCard.module.css"
const SideCard = ({ data: { image, title } }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default SideCard;
