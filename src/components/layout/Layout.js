import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core';

const Layout = () =>{

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.rigthSidebar}>
                <Typography component="h1">
                منوی سمت راست
                </Typography>
            </div>
            <div className={classes.mainSidebar}>Center Sidebar</div>
            <div className={classes.leftSidebar}>Left Sidebar</div>
        </div>
    )
}

export default Layout