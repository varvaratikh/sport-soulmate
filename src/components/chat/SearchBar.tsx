import React from 'react';
import styles from '../../styles/chat/SearchBar.module.sass';

const SearchBar: React.FC = () => {
    return (
        <input
            type="text"
            className={styles.searchBar}
            placeholder="Поиск..."
        />
    );
};

export default SearchBar;
