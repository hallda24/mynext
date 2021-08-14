import Navbar from "./navbar";
import "tailwindcss/tailwind.css";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
