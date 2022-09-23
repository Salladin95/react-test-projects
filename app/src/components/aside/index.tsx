import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  const activeClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'nav__link-active' : undefined;
  };

  return (
    <aside className="col col-3">
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink className={activeClassName} to="/" end>
            Home
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className={activeClassName} to="/cart">
            Cart
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className={activeClassName} to="/order">
            Order
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
