import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} />
            <strong>Ignite Feed</strong>
        </header>
    );
};

export default Header;
