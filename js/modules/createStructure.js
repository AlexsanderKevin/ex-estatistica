import { binaryRandom } from './global.js'

export function createRow() {
    let row = [ 'fragile', 'fragile' ]
    const randomic = binaryRandom()

    row[randomic] = 'solid'

    return row
}

export function createBridge({ rowQuantity }) {
    let bridge = []

    for( let i = 0; i < rowQuantity; i++ ) {
        let row = createRow()
        bridge[i] = row
    }

    return bridge
}
