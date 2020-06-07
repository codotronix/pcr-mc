import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu';
import { headerbarRoutes } from '../../../utils/routes'
import {
    UI_SIDEBAR_OPEN
}
from '../../../redux/actionTypes'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        backgroundColor: '#000',
        height: 40,
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 40,
        '& > a': {
            display: 'inline-flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& > a > svg': {
            fontSize: 26,
            color: '#fff'
        }
    },
    menuBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0 5px',
        height: '100%',
        fontSize: 26,
        color: '#fff'
    },
    active: {
        background: 'rgba(255, 255, 255, .3)'
    }
})

const Header = props => {
    const classes = useStyles()
    const [ currentPath, setCurrentPath ] = useState('')
    const { history, openSidebar } = props

    useEffect(() => {
        setCurrentPath(history.location.pathname)
    }, [history.location.pathname])

    return (
        <div className={classes.root}>
            <MenuIcon className={classes.menuBtn} onClick={openSidebar} />
            {
                headerbarRoutes.map (r => (
                    <Link 
                        to={r.path} 
                        key={r.name}
                        className={(currentPath === r.path) ? classes.active : ''}
                    >
                        <r.icon />
                    </Link>
                ))
            }
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    openSidebar: () => dispatch({ type: UI_SIDEBAR_OPEN })
})
export default connect(null, mapDispatchToProps)(withRouter(Header))