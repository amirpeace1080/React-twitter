import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root:{
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
    },
    leftSidebar: {
        backgroundColor: 'white',
        width: '25%'
    },
    mainSidebar: {
        backgroundColor: 'white',
        flex: 1
    },
    divider:{
        height: '100%',
        width: 1,
        backgroundColor: '#7BEAFF !important',
        filter: 'opacity(0.5)'
    }
})

export default useStyles