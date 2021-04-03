import React from "react";
import { NavLink } from "react-router-dom";
import "./news.scss";

const Category = ({ categories }) => {
  return (
    <div className="categoryArea">
      {categories.map((c) => (
        <NavLink
          className="category"
          key={c.name}
          activeClassName="active"
          exact={c.name === "all"}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
