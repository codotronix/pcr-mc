

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