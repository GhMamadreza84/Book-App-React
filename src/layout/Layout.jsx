// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Book App</h1>
        <p>React Js</p>
      </header>
      {children}
      <footer>
        <p>developed by GhMamadreza with 💙</p>
      </footer>
    </>
  );
};

export default Layout;
