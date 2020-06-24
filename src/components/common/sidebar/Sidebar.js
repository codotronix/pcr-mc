import React from 'react'
import { makeStyles, Drawer, List, ListItem, ListItemIcon,ListItemText 
    } 
from '@material-ui/core'
import { connect } from 'react-redux'
import {
    UI_SIDEBAR_CLOSE
}
from '../../../redux/actionTypes'
import sidemenus from './sidemenus'

const useStyles = makeStyles({
    listContainer: {
        minWidth: 200,
        '& .MuiButtonBase-root': {
            padding: '5px 15px'
        },
        '& .MuiListItemIcon-root': {
            minWidth: 32
        },
        '& svg': {
            fontSize: 25,
            color: '#000' 
        },
    }
})

const Sidebar = props => {
    const classes = useStyles()
    const { sidebarOpen, closeSidebar } = props

    return (
        <div>
            <Drawer
                open={sidebarOpen}
                onClose={closeSidebar}
            >
                <List className={classes.listContainer}>
                    {
                        sidemenus.map(m => 
                            <ListItem button key={m.name}>
                                <ListItemIcon>{<m.icon />}</ListItemIcon>
                                <ListItemText primary={m.name} />
                            </ListItem>
                        )
                    }
                </List>
            </Drawer>
        </div>
    )
}
const mapStateToProps = state => ({
    sidebarOpen: state.ui.sidebarOpen
})
const mapDispatchToProps = dispatch => ({
    closeSidebar: () => dispatch({ type: UI_SIDEBAR_CLOSE })
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)