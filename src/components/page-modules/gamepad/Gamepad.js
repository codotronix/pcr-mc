import React, { createRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import _ from 'lodash'
import axios from 'axios'
import { getRoot } from '../../../utils/config'
import { getDegCos } from './trigon'
import GamesIcon from '@material-ui/icons/Games';
const ROOT = getRoot()

const useStyles = makeStyles({
    wheel: {
        background: '#000',
        border: '5px double #fff',
        height: 100,
        width: 100,
        borderRadius: '50%',
        position: 'absolute',
        bottom: 20,
        transformOrigin: 'center',
        transform: 'rotate(0deg)',
        '&::after': {
            content: "''",
            position: 'absolute',
            right: 5,
            top: 34,
            display: 'inline-block',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'lightgray'
        },
        '&.left': {
            left: 120
        },
        '&.right': {
            right: 120
        }
    },
    directionBtns: {
        position: 'absolute',
        top: 30,
        left: 30,
        color: '#000',
        '& .omniIcon': {
            fontSize: 130
        },
        '& .btn': {
            position: 'absolute',
            backgroundColor: '#f00',
            width: 32,
            height: 32
        },
        '& .btn:active': {
            opacity: .7
        },
        '& .btn.left': {
            left: 9,
            top: 49,
            background: 'linear-gradient(to right, lightgray, #000, #000)'
        },
        '& .btn.right': {
            right: 9,
            top: 49,
            background: 'linear-gradient(to right, #000, #000, lightgray)'
        },
        '& .btn.up': {
            left: 49,
            top: 9,
            background: 'linear-gradient(to bottom, lightgray, #000, #000)'
        },
        '& .btn.down': {
            left: 49,
            bottom: 9,
            background: 'linear-gradient(to bottom, #000, #000, lightgray)'
        },
        
    },
    actionBtns: {
        position: 'absolute',
        top: 30,
        right: 160,
        color: '#fff',
        '& .btn': {
            position: 'absolute',
            height: 40,
            width: 40,
            border: '5px outset lightgrey',
            borderRadius: '50%',
            background: '#000',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        '& .btn:active': {
            borderStyle: 'inset'
        },
        '& .btn.y': {
            top: 0,
            left: 50
        },
        '& .btn.x': {
            top: 45,
            left: 0
        },
        '& .btn.a': {
            top: 90,
            left: 50
        },
        '& .btn.b': {
            top: 45,
            left: 99
        }
    },
    middleBtns: {
        position: 'relative',
        width: 200,
        // border: '1px solid #ccc',
        borderRadius: 10,
        margin: 'calc(100vh - 220px) auto',
        display: 'grid',
        gridTemplate: 'auto / 1fr 1fr',
        fontSize: 11,
        '& .btn': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        '& .btn::before': {
            content: '""',
            height: 9,
            width: 36,
            border: '5px double #fff',
            background: '#000',
            borderRadius: 20,
            marginBottom: 1,
            opacity: .9
        },
        '& .btn:active::before': {
            opacity: .5
        }
    }
})

const Gamepad = props => {
    const classes = useStyles()
    const pollTime = 100
    const w1 = createRef()      //Wheel 1 - The left Wheel
    const w2 = createRef()      //Wheel 2 - The Right Wheel

    const [w1Deg, setW1Deg] = useState(9)
    const [w2Deg, setW2Deg] = useState(90)
    const [prevMousePos, setPrevMousePos] = useState({})
    const [midPointsWheels, setMidPointsWheels] = useState({})

    useEffect(() => {
        // Calculate MidPoint for Wheel1 and Wheel2
        let rect1 = w1.current.getBoundingClientRect()
        let rect2 = w2.current.getBoundingClientRect()

        let midW1 = {
            y: rect1.top + rect1.height/2,
            x: rect1.left + rect1.width/2
        }

        let midW2 = {
            y: rect2.top + rect2.height/2,
            x: rect2.left + rect2.width/2
        }

        setMidPointsWheels({
            w1: { ...midW1 },
            w2: { ...midW2 }
        })
        
    }, [])

    const setMousePrev = (e, wID) => {
        const pageX = Math.round(e.pageX || e.touches[0].pageX)
        const pageY = Math.round(e.pageY || e.touches[0].pageY)
        setPrevMousePos({
            ...prevMousePos,
            [wID]: { x: pageX, y: pageY }
        })
    }

    const unsetMousePrev = (e, wID) => setTimeout(() => setPrevMousePos({
        ...prevMousePos,
        [wID]: null
    }), pollTime + 10) 

    const trackMouse = (e, wID) => {
        if(!prevMousePos[wID]) return
        const pageX = Math.round(e.pageX || e.touches[0].pageX)
        const pageY = Math.round(e.pageY || e.touches[0].pageY)
        rotateWheel({ x: pageX, y: pageY, wID })
    }

    const rotateWheel = _.throttle(pos => {
        const { wID, ...cp } = pos              // cp = current-point
        const mp = { ...midPointsWheels[wID] }  // mp = mid-point
        const pp = { ...prevMousePos[wID] }     // pp = prev-point

        let degree = getDegCos(mp, pp, cp)

        if(!isNaN(degree)){
            // let dir = 1
            if (wID === 'w1') {
                setW1Deg(w1Deg + degree)
            }
            else if(wID === 'w2') {
                setW2Deg(w2Deg - degree)
            }
        }
        
        // update prev mouse pos
        setPrevMousePos({
            ...prevMousePos,
            [wID]: { ...cp }
        })

        // post(`${ROOT}/mouse-move`, diff)
    }, 
    pollTime)

    // const post = (url, data) => axios.post(url, data)

    return (
        <div>
            {/* THIS IS WHEEL 1 on LEFT */}
            <div className={clsx(classes.wheel, 'left')}
                ref={w1}
                onTouchStart={e => setMousePrev(e, 'w1')}
                onTouchEnd={e => unsetMousePrev(e, 'w1')}
                onTouchMove={e => trackMouse(e, 'w1')}
                style={{transform: `rotate(${w1Deg}deg)`}}
            ></div>

            {/* THIS IS WHEEL 2 on RIGHT */}
            <div className={clsx(classes.wheel, 'right')}
                ref={w2}
                onTouchStart={e => setMousePrev(e, 'w2')}
                onTouchEnd={e => unsetMousePrev(e, 'w2')}
                onTouchMove={e => trackMouse(e, 'w2')}
                style={{transform: `rotate(${w2Deg}deg)`}}
            ></div>

            {/* THE LEFT DIRECTION BUTTONS */}
            <div className={classes.directionBtns}>
                <GamesIcon className="omniIcon"/>
                <div className="btn left"></div>
                <div className="btn right"></div>
                <div className="btn up"></div>
                <div className="btn down"></div>
            </div>

            {/* THE RIGHT ACTION BUTTONS */}
            <div className={classes.actionBtns}>
                <div className="btn y">Y</div>
                <div className="btn b">B</div>
                <div className="btn a">A</div>
                <div className="btn x">X</div>
            </div>

            {/* THE MIDDLE BUTTONS SECTION */}
            <div className={classes.middleBtns}>
                <div className="btn">PAUSE</div>
                <div className="btn">START</div>
                {/* <div className="btn">Button1</div>
                <div className="btn">Button2</div> */}
            </div>
        </div>
    )
}

export default Gamepad