import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className= { styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.headerLeft }>
                    <div className= { styles.logo }>HELSINGIN SANOMAT</div>
                    <div className= { styles.linkPadding }>Uutiset</div>
                    <div className= { styles.linkPadding }>Lehdet</div>
                </div>
                <div className={ styles.headerRight }>
                    <div className= { styles.tilaa }>Tilaa</div>
                    <div className= { styles.linkPadding }>Kirjaudu</div>
                    <div className= { styles.linkPadding }>Hae</div>
                    <div className= { styles.linkPadding }>Valikko</div>
                </div>
            </div>
        </div>
    )
}
