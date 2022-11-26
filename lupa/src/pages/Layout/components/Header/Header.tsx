import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import logo from '../../../../ui/icons/greenatom-ico.png';
// @ts-ignore
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to='/'>
        <img src={logo} alt='logo' className={styles.Logo} />
      </Link>
    </div>
  );
};

export default Header;
