import React from 'react'
import styles from './Navbar.module.css';
import SearchField from './SearchField';

export default function Navbar(props) {
    return (
        <div>
            <div className={styles.navbar}>
            <div className={styles.logo}>Headphone Store</div>
                <div>
                    <SearchField searchFieldUpdate = {props.searchFieldUpdate} />
                </div>
                
            </div>
        </div>
    )
}
