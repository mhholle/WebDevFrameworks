import React from 'react';
import styles from './MainView.module.css';
import SearchResult from './SearchResult.js';
import Navbar from './Navbar.js';

export default function MainView(props) {
    return (
        <div>
            <Navbar {...props} />
            <div className={ styles.container }>
                { props.items.map(item => <SearchResult key={item.id} {...item} />) }
            </div>
        </div>
    )
}
