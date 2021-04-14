import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root:{
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
    },
    rigthSidebar: {
        backgroundColor: '#BDC3C7',
        width: '18%'
    },
    leftSidebar: {
        backgroundColor: '#BDC3C7',
        width: '25%'
    },
    mainSidebar: {
        backgroundColor: '#BDC3C7',
        flex: 1
    }
})

export default useStyles