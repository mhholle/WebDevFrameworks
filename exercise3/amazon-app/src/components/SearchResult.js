import React from 'react'
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
        <div className={ styles.productBox }>
            <div>
                <div><img src={`/images/${props.image}`} alt={ props.manufacturer + ' ' + props.model}/></div>
                <div className={ styles.manufacturer}>{ props.manufacturer }</div> 
                <div>{ props.model }</div>
                <div>{ props.price }€</div>
            </div>
        </div>
    )
}
