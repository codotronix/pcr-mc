

/**
 * Get distance between 2 points
 * @param {{x,y}} p1 
 * @param {{x,y}} p2 
 */
export const getDistance = (p1, p2) => Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2)

/**
 * Get Angle in Degree between 3 points
 * The desired angle is in MiddlePoint
 * This formula uses Cos,hence the name
 * 
 * @param {{x,y}} mp - Middle Point
 * @param {{x,y}} pp - Previous Point
 * @param {{x,y}} cp - Current Point
 */
export const getDegCos = (mp, pp, cp) => {
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

/**
 * Get Angle in Degree between 3 points
 * The desired angle is in MiddlePoint
 * This formula uses Tan,hence the name
 * 
 * @param {{x,y}} mp - Middle Point
 * @param {{x,y}} pp - Previous Point
 * @param {{x,y}} cp - Current Point
 */
export const getDegTan = (mp, pp, cp) => {
    let m1 = (pp.y - mp.y) / (pp.x - mp.x)
    let m2 = (cp.y - mp.y) / (cp.x - mp.x)
    let theta = Math.atan( (m2-m1) / (1 - m1*m2))
    return (theta * 180) / Math.PI
}

/**
 * It will take 3 points and returns whether the created angle is Negative.
 * An angle is said to be positive if it is made in counter-clockwise
 * And angle is negative if it moves clockwise (Refer to basic angles in Trigonometry)
 * So, according to Trigonometry,
 * Clockwise = Negative
 * CounterClockwise = Positive
 * Link: https://www.cliffsnotes.com/study-guides/trigonometry/trigonometric-functions/angles
 * 
 * Here the two lines are made by Origin-Point1 (line1) and Origin-Point2 (line2)
 * And our desired angle (vector) is made going in the direction from line1 to line2
 * 
 * To deduce the angle is clockwise or anti-clockwise,
 * Let's break down our calculation in 4 halves
 * 
 * Top Half (1st and 2nd Quadrant)
 * i.e. both y1 and y2 are < y0
 * here, if x2 < x1 then CounterClockwise, else Clockwise
 * 
 * Bottom Half (3rd and 4th Quadrant)
 * i.e. both y1 and y2 are < y0
 * here, if x2 > x1 then Clockwise, else CounterClockwise
 * 
 * Left Half (2nd and 3rd Quadrant)
 * i.e. both x1, x2 has to be less than x0
 * here, if y2 < y1 then Clockwise, else CounterClockwise
 * 
 * Right Half (1st and 4th Quadrant)
 * i.e. both x1, x2 has to be greater than x0
 * here, if y2 < y1 then CounterClockwise, else Clockwise
 * 
 * @param {{x: number, y: number}} o | Origin {x, y}
 * @param {{x: number, y: number}} p1 | Point 1 {x,y}
 * @param {{x: number, y: number}} p2 | Point 2 {x,y}
 * @returns {Boolean}
 */
export const isNegativeAngle = (o, p1, p2) => {
    let isClockwise = true  // just an initial assumption. [Clockwise = Negative Angle]

    // Now I will try to implement the logic I have written above :P

    //Top Half Calculation
    if(p1.y <= o.y && p2.y <= o.y) {
        if(p2.x < p1.x) isClockwise = false // i.e. CounterClockwise
    }

    //Bottom Half Calculation
    else if(p1.y >= o.y && p2.y >= o.y) {
        if(p2.x > p1.x) isClockwise = false // i.e. CounterClockwise
    }

    //Left Half Calculation
    else if(p1.x <= o.x && p2.x <= o.x) {
        if(p2.y > p1.y) isClockwise = false // i.e. CounterClockwise
    }

    //Right Half Calculation
    else if(p1.x >= o.y && p2.x >= o.y) {
        if(p2.y < p1.y) isClockwise = false // i.e. CounterClockwise
    }

    return isClockwise
}