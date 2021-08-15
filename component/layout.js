import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
