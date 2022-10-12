import { binaryRandom } from './global.js'
import { createBridge } from './createStructure.js'
import { tryJump, tryRun } from './individualTries.js'

export function consoleTests() {

    const bridge = createBridge({ rowQuantity: 10 })
    const testRun = tryRun({ bridge })
    const testJump = tryJump({ row: bridge[0] })
    console.log('\n\n\n\n')
    
    console.log('initial bridge')
    console.log(bridge)
    console.log('\n\n\n\n')
    
    console.log( 'Run result: ' + testRun.status )
    console.log( testRun )
    console.log('\n\n\n\n')
    
    console.log('remaining bridge:')
    console.log( testRun.remainingBridge )
}
