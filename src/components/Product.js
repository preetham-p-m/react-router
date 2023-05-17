import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <input type="search" placeholder="Search Product" />
      <nav>
        <Link to={"feature"}>Feature</Link>
        <Link to={"new"}>New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Product;
