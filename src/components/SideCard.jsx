import styles from "./SideCard.module.css";
const SideCard = ({ data: { image, title } }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default SideCard;
