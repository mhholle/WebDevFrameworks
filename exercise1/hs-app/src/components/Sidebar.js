import React from 'react'
import styles from './Sidebar.module.css';

export default function Sidebar(props) {
    return (
        <div className={ styles.container }>
            <div className={ styles.sideBar }>
                <span className={ styles.listNumber }>{props.itemNumber}</span>
                <span className={styles.header}> {props.topic}</span> <span className={styles.bodyText}>{props.body}</span>
            </div>
        </div>
    )
}