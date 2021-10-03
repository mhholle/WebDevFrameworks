import React from 'react'
import styles from './MainNews.module.css';

export default function MainNews(props) {
    return (
        <div className={ styles.container }>
            <img src={props.photo} className={ styles.image }></img>
            <div className={styles.bodyText}><span className={styles.header}> {props.topic}</span> {props.body}</div>
            <div className={styles.tagText}>{props.tag}</div>
        </div>
    )
}