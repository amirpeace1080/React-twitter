import React from 'react'
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import useStyles from './styles'


const hashTags = [
    "گوشی_سامسونگ",
    "پرچم_دار_جدید",
    "کرونا_ویرس",
    "کوید_۱۹",
    "گوشی_شیایومی"
]

export default function RightSidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item>
                    <img src={"https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"} height="55" width="55" />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoType}>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashtagTitle}>
                داغ ترین هشتک ها
            </Typography>

            {/* hashtags */}
            <Grid container direction={"column"} alignItems={'center'}>

                {
                    hashTags.map(item=>
                        <ButtonBase className={classes.hashtagParent}>
                <Grid item container>
                    <img src={"https://i.pinimg.com/236x/5b/1f/de/5b1fde19188203190af6c6cc7e13d223.jpg"} height="35" width="35" />
                    <Typography className={classes.hashtag}>
                        پرچم_دار_جدید
                    </Typography>
                </Grid>
                </ButtonBase>
                        )
                }

                {/* <ButtonBase className={classes.hashtagParent}>
                <Grid item container>
                    <img src={"https://i.pinimg.com/236x/5b/1f/de/5b1fde19188203190af6c6cc7e13d223.jpg"} height="35" width="35" />
                    <Typography className={classes.hashtag}>
                        پرچم_دار_جدید
                    </Typography>
                </Grid>
                </ButtonBase> */}

            </Grid>
        </div>
    )
}
