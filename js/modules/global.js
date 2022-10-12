export function binaryRandom() {
    let result
    const randomic  = Math.round( Math.random() * 10 )
    result = ( randomic % 2 )

    return result
}
