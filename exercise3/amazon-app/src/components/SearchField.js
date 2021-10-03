import React from 'react'
import styles from './SearchField.module.css'

export default function SearchField(props) {
    return (
        <div>
            <form>
                <input type="text" name="search" onChange={ props.searchFieldUpdate }/>
            </form>
        </div>
    )
}
