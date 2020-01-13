import React from 'react'

import NavigationItems from './NavigationItem/NavigationItem.js'

import classes from './NavigationItems.css'

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItems />
        </ul>
    )
}

export default navigationItems
