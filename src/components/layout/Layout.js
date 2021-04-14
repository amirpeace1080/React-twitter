import React from 'react'
import useStyles from './styles'

const Layout = () =>{

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.rigthSidebar}>Right Sidebar</div>
            <div className={classes.mainSidebar}>Center Sidebar</div>
            <div className={classes.leftSidebar}>Left Sidebar</div>
        </div>
    )
}

export default Layout