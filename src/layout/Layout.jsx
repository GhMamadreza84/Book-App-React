import styles from "./Layout.module.css";
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">React</a> Js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by GhMamadreza with 💙</p>
      </footer>
    </>
  );
};

export default Layout;
