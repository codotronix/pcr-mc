import React, { createRef, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import _ from 'lodash'
import axios from 'axios'
import { getRoot } from '../../../utils/config'
const ROOT = getRoot()

const useStyles = makeStyles({
    wheel: {
        background: '#fff',
        border: '5px double #000',
        height: 80,
        width: 80,
        borderRadius: '50%',
        position: 'absolute',
        bottom: 0,
        left: 60,
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
            background: '#f00'
        }
    }
})

const Gamepad = props => {
    const classes = useStyles()
    const pollTime = 100
    const w1 = createRef()      //Wheel 1

    const [w1Deg, setW1Deg] = useState(9)
    const [prevMousePos, setPrevMousePos] = useState({})
    const [midPointsWheels, setMidPointsWheels] = useState({})

    useEffect(() => {
        // Calculate MidPoint for Wheel1
        let rect1 = w1.current.getBoundingClientRect()
        console.log("bounding rect1 = ", rect1)

        let midW1 = {
            y: rect1.top + rect1.height/2,
            x: rect1.left + rect1.width/2
        }

        setMidPointsWheels({
            w1: { ...midW1 }
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
        // first, get the details of 3 points
        // i.e. currentPoint, midPoint, PrevPoint
        // with this 3 point we need to calculate the angle beteen
        // current-radius and previous-radius
        const { wID, ...cp } = pos
        const mp = { ...midPointsWheels[wID] }  // mp = mid-point
        const pp = { ...prevMousePos[wID] }     // pp = prev-point

        
        let degree = getDegCos(mp, pp, cp)
        // let dTan = getDegTan(mp, pp, cp)

        // console.log(degree)

        //Clockwise OR Anti-Clockwise

        if(!isNaN(degree)){
            let dir = 1
            setW1Deg(w1Deg + (degree*dir))
        }
        
        // update prev mouse pos
        setPrevMousePos({
            ...prevMousePos,
            [wID]: { ...cp }
        })

        // post(`${ROOT}/mouse-move`, diff)
    }, 
    pollTime)


    const post = (url, data) => axios.post(url, data)

    const getDistance = (p1, p2) => Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2)

    const getDegCos = (mp, pp, cp) => {
        // lets Calculate the distances
        // let's MidPoint angle is A
        // Lets PrevPoint Angle is B
        // CurrentPoint Angle is C
        let a = getDistance(cp, pp)
        let b = getDistance(cp, mp)
        let c = getDistance(mp, pp)

        let A = Math.acos ((b*b + c*c - a*a) / (2 * b * c))

        return (A * 180) / Math.PI
    }

    const getDegTan = (mp, pp, cp) => {
        let m1 = (pp.y - mp.y) / (pp.x - mp.x)
        let m2 = (cp.y - mp.y) / (cp.x - mp.x)
        let theta = Math.atan( (m2-m1) / (1 - m1*m2))
        return (theta * 180) / Math.PI
    }

    const isClockWise = (m, p, c) => {

    }

    return (
        <div>
            <div className={classes.wheel}
                ref={w1}
                onTouchStart={e => setMousePrev(e, 'w1')}
                onTouchEnd={e => unsetMousePrev(e, 'w1')}
                onTouchMove={e => trackMouse(e, 'w1')}
                style={{transform: `rotate(${w1Deg}deg)`}}
            ></div>
        </div>
    )
}

export default Gamepad