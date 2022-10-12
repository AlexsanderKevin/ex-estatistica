import { binaryRandom } from './global.js'

export function tryJump({ row }) {
    let result
    const jumpedPlataform = binaryRandom()

    result = row[jumpedPlataform] === 'solid' ? 'success' : 'fail'

    return result 
}

export function tryRun({ bridge }) {
    let result = {}

    for( let i = 0; i < bridge.length; i++ ) {
        result.status = tryJump({ row: bridge[i] })
        result.tries = i + 1
        result.remainingBridge = bridge.slice( result.tries, (bridge.length) )
        
        console.log(`Tentativa n ${ result.tries }:`)
        console.log(result)
        console.log('---------------------------------------------------------------')
        
        if ( result.status === 'fail' ) break
    }

    return result
}
