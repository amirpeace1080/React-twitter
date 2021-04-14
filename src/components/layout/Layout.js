import { Divider } from '@material-ui/core';
import React from 'react'
import RightSidebar from '../rightSidebar/RightSidebar';
import useStyles from './styles'

const Layout = () =>{

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <RightSidebar />
            <Divider orientation={"vertical"} className={classes.divider} />
            <div className={classes.mainSidebar}>Center Sidebar</div>
            <div className={classes.leftSidebar}>Left Sidebar</div>
        </div>
    )
}

export default Layout