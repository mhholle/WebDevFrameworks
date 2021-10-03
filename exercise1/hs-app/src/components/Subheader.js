import React from 'react'
import styles from './Subheader.module.css'

export default function Subheader() {
    return (
        <div className= { styles.subHeaderBackground}>
            <div className={ styles.container }>
                <div className= { styles.linkPadding }>Etusivu</div>
                <div className= { styles.linkPadding }>HS Visio</div>
                <div className= { styles.linkPadding }>Luetuimmat</div>
                <div className= { styles.linkPadding }>Uusimmat</div>
                <div className= { styles.linkPadding }>Politiikka</div>
                <div className= { styles.linkPadding }>Kaupunki</div>
                <div className= { styles.linkPadding }>Kulttuuri</div>
                <div className= { styles.linkPadding }>Tiede</div>
                <div className= { styles.linkPadding }>Hyvinvointi</div>
                <div className= { styles.linkPadding }>Ruoka</div>
                <div className= { styles.linkPadding }>Nyt</div>
            </div>
        </div>
    )
}
