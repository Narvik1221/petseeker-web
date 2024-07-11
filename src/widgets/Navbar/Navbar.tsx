import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_ROUTE, REGISTRATION_ROUTE} from "../../app/router/consts";

const Navbar: React.FC = () => {

  return (
    <nav>
      <ul>

        <li>
          <Link to={ MAIN_ROUTE}>Home</Link>
        </li>
        <li>
          <Link to={ REGISTRATION_ROUTE}>Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
